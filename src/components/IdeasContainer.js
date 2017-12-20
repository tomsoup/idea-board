import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';
import IdeaTile from './IdeaTile';
import IdeaForm from './IdeaForm';

class IdeasContainer extends Component {
  state = {
    ideas: [],
    currentIdea: null,
    notification: ''
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/v1/ideas.json")
    .then(
      response => {
        this.setState({ ideas: response.data
        });
      }
    ).catch(err => console.log(err));
  }

  addNewIdea = () => {
    axios.post("http://localhost:3000/api/v1/ideas", { idea: { title: '', body: ''}})
    .then(response => {
      console.log(response);
      const ideas = update(this.state.ideas, {
        $splice: [[0, 0, response.data]]
      });
      this.setState({
        ideas,
        currentIdea: response.data.id
      })
    }).catch(err => console.log(err));
  }

  updateIdea = (idea) => {
    const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id);
    const ideas = update(this.state.ideas, {[
      ideaIndex
    ]: {
      $set: idea
    }});
    this.setState({
      ideas, notification: 'All Changes saved'
    });
  }

  setNotification = () => {
    this.setState({
      notification: ''
    });
  }

  enableEditing = (id) => {
    this.setState({
      currentIdea: id
    }, () => {
      this.title.focus()
    });
  }

  render() {
    const { ideas, currentIdea, notification } = this.state;
    return (
      <div className="">
        <div>
          <button
            onClick={this.addNewIdea} className="newIdeaButton">
            Add New
          </button>
          <span className="notification">
            {notification}
          </span>
        </div>
        {ideas.map((idea) => {
          if(currentIdea === idea.id) {
            return (
              <IdeaForm idea={idea} key={idea.id} updateIdea={
                this.updateIdea
              }
              setNotification={
                this.setNotification
              }
              titleRef={
                input => {
                  this.title = input
                }
              }
            />
            )
          }
          return (
            <IdeaTile idea={idea} key={idea.id} handleClick={this.enableEditing}/>
          )
        })}
      </div>
    );
  }
}

export default IdeasContainer;
