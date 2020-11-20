import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      fTinh: "selected",
    };
  }
  isFileChage = (event) => {
    const name = event.target.files[0].name;
    this.setState({
      fFile: name,
    });
  };
  isChange = (event) => {
    // console.log(event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      isRedirect: true,
    });
  };
  render() {
    if (this.state.isRedirect === true) {
      console.log(this.state);
      return <Redirect to="/duan" />;
    }
    return (
      <div className="col-md-12">
        <form>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label>Tên viết tắt</label>
              <input
                name="fTenVT"
                type="text"
                className="form-control"
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group col-md-3">
              <label>Tên tòa nhà</label>
              <input
                name="fTenTN"
                type="text"
                className="form-control"
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group col-md-3">
              <label>Điện thoại</label>
              <input
                name="fDienThoai"
                type="text"
                className="form-control"
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group col-md-3">
              <label>Email</label>
              <input
                name="fEmail"
                type="email"
                className="form-control"
                onChange={(event) => this.isChange(event)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Địa chỉ</label>
              <input
                name="fDiaChi"
                type="text"
                className="form-control"
                placeholder="Ngõ 21 - Lê Văn Lương - Thanh Xuân - Hà Nội"
                onChange={(event) => this.isChange(event)}
              />
            </div>
            <div className="form-group col-md-4">
              <label>Tỉnh</label>
              <select
                name="fTinh"
                className="form-control"
                onChange={(event) => this.isChange(event)}
                value={this.state.fTinh}
              >
                <option>Chọn tỉnh...</option>
                <option value="hanoi">Hà nội</option>
                <option value="hatinh">Hà tĩnh</option>
              </select>
            </div>
          </div>
          <div className="form-group col-md-4 custom-file">
            <input
              type="file"
              className="custom-file-input"
              name="fFile"
              lang="es"
              onChange={(event) => this.isFileChage(event)}
            />
            <label className="custom-file-label" data-browse="Chọn file">
              {this.state.fFile}
            </label>
          </div>
          <div className="col-md-12"></div>
          <button
            onClick={(event) => this.submitForm(event)}
            type="submit"
            className="btn btn-primary"
          >
            Lưu
          </button>
        </form>
      </div>
    );
  }
}
