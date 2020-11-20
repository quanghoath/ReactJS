import React, { Component } from "react";
import Menu from "../left/Menu";
import Topbar from "./Topbar";
import Modal from "./Modal";
import DieuHuong from "../router/DieuHuong";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tittle: "Tên sản phẩm",
    };
  }
  render() {
    return (
      <div>
        <div id="wrapper">
          {/* Sidebar */}
          <Menu />
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column ">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <Topbar />
              {/* End of Topbar */}
              {/* Begin Page Content */}
              <div className="container-fluid">
                {/* Page Heading */}
                <div className="row" style={{ paddingTop: "10px" }}>
                  <DieuHuong />
                </div>
              </div>
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}

            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © ViKing Website 2020</span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        <Modal />
      </div>
    );
  }
}
