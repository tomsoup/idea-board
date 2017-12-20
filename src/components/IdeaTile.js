import React, { Component } from 'react';

class IdeaTile extends Component {

  render() {
    const { key, idea } = this.props;
    return (
      <div className="ideaTiles" key={key}>
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
