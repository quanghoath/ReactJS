import React, { Component } from "react";
import Modal from "../main/Modal";
import db from "../left/cap1.json";
import db2 from "../left/cap2.json";
import { NavLink } from "react-router-dom";
class Li extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 0,
    };
  }
  renderModal = () => <Modal />;
  displayCheck = () => {
    if (this.state.modal === 1) {
      return this.renderModal();
    } else {
      return "";
    }
  };
  modalClick = () => {
    this.setState({ modal: 1 });
  };
  hideModalClick = () => {
    this.setState({ modal: 0 });
  };
  render() {
    return (
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="javascrip(0);"
          data-toggle="collapse"
          data-target={`#${this.props.data}`}
          aria-expanded="true"
          aria-controls={this.props.data}
        >
          <i className={this.props.icon} />
          <span>{this.props.name}</span>
        </a>
        <div
          id={this.props.data}
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            {db2.map((value, key) => {
              if (this.props.id === parseInt(value.idCha)) {
                return (
                  <NavLink
                    key={key}
                    className="collapse-item"
                    to={"/" + value.url}
                  >
                    {value.Name}
                  </NavLink>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </li>
    );
  }
}
export default class Menu extends Component {
  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="javascrip(0);">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            BEESKY<sup></sup>
          </div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        {/* Nav Item*/}
        {db.map((value, key) => {
          return (
            <Li
              id={value.id}
              key={key}
              name={value.Name}
              data={value.url}
              icon={value.icon}
            />
          );
        })}
        {this.displayCheck}
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    );
  }
}
