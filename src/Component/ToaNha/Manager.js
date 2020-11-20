import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Manager extends Component {
  render() {
    return (
      <div className="col-md-12">
        <table
          className="table table-bordered"
          data-spy="scroll"
          data-offset="0"
        >
          <thead>
            <tr>
              <th scope="col" style={{ width: "40px" }}>
                STT
              </th>
              <th scope="col" style={{ width: "110px" }}></th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <NavLink
                  to="sua"
                  className="btn btn-outline-primary btn-circle"
                >
                  <i className="fas fa-edit"></i>
                </NavLink>
                <button href="#" className="btn btn-outline-danger btn-circle">
                  <i className="fas fa-trash"></i>
                </button>
              </td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
