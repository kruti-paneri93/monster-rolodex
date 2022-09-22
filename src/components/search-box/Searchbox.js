import React, { Component } from "react";
import '../search-box/SearchboxStyles.css';

export class Searchbox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default Searchbox;
