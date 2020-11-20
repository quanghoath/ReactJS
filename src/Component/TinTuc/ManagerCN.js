import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ManagerCN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 1,
    };
  }
  renderButton = () => (
    <div>
      <button className="btn btn-primary" onClick={() => this.clickEdit()}>
        Edit
      </button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
  renderForm = () => {
    return (
      <form>
        <div className="form-row align-items-center">
          <div className="col-sm-9 my-1">
            <label className="sr-only" htmlFor="inlineFormInputName">
              Title
            </label>
            <input
              ref={(dulieu) => {
                this.trungian = dulieu;
              }}
              defaultValue={this.props.tittle}
              type="text"
              className="form-control"
              id="inlineFormInputName"
              placeholder="Jane Doe"
            />
          </div>
          <div className="col-auto my-1">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => this.clickSave()}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  };
  displayCheck = () => {
    if (this.state.status === 1) {
      return this.renderButton();
    } else {
      return this.renderForm();
    }
  };
  clickEdit = () => {
    this.setState({ status: 0 });
  };
  clickSave = () => {
    this.setState({ status: 1 });
    console.log(this.trungian.value);
  };
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
    // console.log("Đây là hàm render");
    //console.log(this.state.status);
    return (
      <div className="col-md-3">
        <div className="card">
          <Link
            to={
              "tin-moi/" +
              this.convertURL(this.props.tittle) +
              "." +
              this.props.id
            }
          >
            <img src={this.props.image} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{this.props.tittle}</h5>
            <p className="card-text">{this.props.content}</p>
            {this.displayCheck()}
          </div>
        </div>
      </div>
    );
  }
}
