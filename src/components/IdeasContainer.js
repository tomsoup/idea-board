import React, { Component } from 'react';
import axios from 'axios';
import IdeaTile from './IdeaTile';

class IdeasContainer extends Component {
  state = {
    ideas: []
  }

  componentDidMount() {
    axios.get("http://localhost:3000/api/v1/ideas")
    .then(
      response => {
        this.setState({ ideas: response.data
        });
      }
    ).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="">
        <div>
          <button className="newIdeaButton">
            Add New
          </button>
        </div>
        {this.state.ideas.map(idea => {
          return (
            <IdeaTile idea={idea} key={idea.id} />
          )
        })}
      </div>
    );
  }
}

export default IdeasContainer;
