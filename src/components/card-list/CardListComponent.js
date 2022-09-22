import React, { Component } from "react";
import Card from "../card/Card";
import "../card-list/CardListStyle.css";

export class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <Card monster={monster} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
