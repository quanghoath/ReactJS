import React, { Component } from "react";
import db from "../Data.json";
import ManagerCN from "../TinTuc/ManagerCN";
export default class Manager extends Component {
  render() {
    return (
      <div className="row">
        {db.map((value, key) => {
          return (
            <ManagerCN
              key={key}
              id={value.id}
              tittle={value.Tittle}
              image={value.Image}
              content={value.Content}
            />
          );
        })}
      </div>
    );
  }
}
