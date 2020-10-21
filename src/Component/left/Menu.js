import React, { Component } from "react";
class Li extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
    };
  }
  thongbao = (x) => {
    alert(x);
  };
  thongbao2 = () => {
    alert("hehe");
  };
  render() {
    return (
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target={`#${this.props.data}`}
          aria-expanded="true"
          aria-controls={this.props.data}
        >
          <i className="fas fa-fw fa-cog" />
          <span>{this.props.name}</span>
        </a>
        <div
          id={this.props.data}
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" onClick={() => this.thongbao("haha")}>
              Dự án
            </a>
            <a
              className="collapse-item"
              onClick={this.thongbao.bind(this, "Mặt bằng")}
            >
              Mặt bằng
            </a>
            <a className="collapse-item" onClick={this.thongbao2}>
              Cards
            </a>
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
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
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
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        {/* Nav Item*/}
        <Li name="Hệ thống" data="HeThong" MenuLi="[Cấu hình,Dự án]" />
        <Li name="Dự án" data="DuAn" MenuLi="[Cấu hình,Dự án]" />

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    );
  }
}
