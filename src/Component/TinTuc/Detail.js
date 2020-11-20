import React, { Component } from "react";
import db from "../Data.json";

import { Link } from "react-router-dom";
export default class Detail extends Component {
  convertURL = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");
    // return
    return str;
  };
  render() {
    let dem = 1;
    return (
      <div className="col-md-12">
        {db.map((value, key) => {
          if (value.id === parseInt(this.props.match.params.id)) {
            return (
              <div key={key}>
                <img
                  src={value.Image}
                  className="img-fluid"
                  alt="Ảnh tiêu để 1"
                ></img>
                <h2>{value.Tittle}</h2>
                <p>{value.Content}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className="row">
          {db.map((value, key) => {
            if (value.id !== parseInt(this.props.match.params.id)) {
              if (dem < 5) {
                dem++;
                return (
                  <div key={key} className="col-md-3">
                    <div className="card border-left-primary shadow ">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                            <div className="text-m font-weight-bold text-primary text-uppercase">
                              {value.Tittle}
                            </div>
                            <div className="text-xs  font-weight-bold text-gray-800">
                              {value.Description}
                            </div>
                          </div>
                          <div className="col-auto">
                            <Link
                              to={
                                this.convertURL(value.Tittle) + "." + value.id
                              }
                            >
                              <img
                                src={value.Image}
                                className="img-fluid"
                                alt="Ảnh tiêu để 1"
                              />
                            </Link>

                            {/* <i className="fas fa-calendar fa-2x text-gray-300" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}
