import React, { Component } from 'react';

class IdeaTile extends Component {

  handleEdit = () => {
    this.props.handleEdit(this.props.idea.id);
  }

  handleDelete = () => {
    this.props.handleDelete(this.props.idea.id);
  }

  render() {
    const { idea } = this.props;
    return (
      <div className="ideaTiles" onClick={this.handleEdit}>
        <span
          onClick={this.handleDelete} className="deleteButton">x</span>
        <h4>
          {idea.title}
        </h4>
        <p>
          {idea.body}
        </p>
      </div>
    );
  }
}

export default IdeaTile;
