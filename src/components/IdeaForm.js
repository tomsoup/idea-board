import React, { Component } from 'react';
import axios from 'axios';

class IdeaForm extends Component {
  state = {
    title: this.props.idea.title,
    body: this.props.idea.body
  }

  handleInput = (text) => {
    this.props.setNotification();
    this.setState({
      [
        text.target.name
      ] : text.target.value
    })
  }

  handleBlur = () => {
    const idea = {title: this.state.title, body: this.state.body }
    axios.put(
      `http://localhost:3000/api/v1/ideas/${this.props.idea.id}`, {
      idea
      }
    ).then(response => {
      this.props.updateIdea(response.data);
    }).catch(
      err => {
        console.log(err);
      }
    )
  }
  render() {
    return (
      <div className="ideaTiles">
        <form onBlur={this.handleBlur} >
          <input className='input' type="text" name="title" placeholder="Enter a Title" value={this.state.title} onChange={this.handleInput}
          ref={this.props.titleRef}
          />
          <textarea className='input' name="body" placeholder='Describe your idea'
          value={this.state.body} onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}

export default IdeaForm;
