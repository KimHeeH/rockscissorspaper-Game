import React, { Component } from "react";

class Box extends Component {
  render() {
    const { color, title, item, result } = this.props;
    const resultColor = color;

    return (
      <div className="box" style={{ borderColor: resultColor }}>
        <h1>{title}</h1>
        <img
          className="item-img"
          src={item && item.img}
          alt={item ? item.name : ""}
        />
        <h2>{result}</h2>
      </div>
    );
  }
}

export default Box;
