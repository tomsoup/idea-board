import React, { Component } from 'react';

class IdeaTile extends Component {

  handleClick = () => {
    this.props.handleClick(this.props.idea.id);
  }

  render() {
    const { idea } = this.props;
    return (
      <div className="ideaTiles" onClick={this.handleClick}>
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
