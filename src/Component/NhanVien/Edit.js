import React, { Component } from "react";
import {  Redirect } from "react-router-dom";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:  "",
      fName:"",
      fPhone:"",
      fPermission:"",
      isRedirect:false
    };
  }
  componentWillMount() {
    if(this.props.useIsAdd !== true)
    {
      this.setState({
        id:  this.props.edit.id,
      fName:this.props.edit.name,
      fPhone:this.props.edit.tel,
      fPermission:this.props.edit.permission,
      })
    }
  }
  componentDidMount() {
    return true;
  }
  
  submitForm = (event) => {
    event.preventDefault();
    if(this.state.id === "" )
    {
        this.props.add(
          this.state.id,
            this.state.fName,
            this.state.fPhone,
            this.state.fPermission
          )
    }
    else{
      var info ={};
      info.id = this.state.id; 
      info.name = this.state.fName;
      info.tel = this.state.fPhone;
      info.permission = this.state.fPermission;
      this.props.infoEdit(info);
    }
    this.setState({isRedirect:true})
  };
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    console.log(this.state);
    if(this.state.isRedirect === true)
    {
        return <Redirect to="NhanVien"/>
    }
    
    return (
      <div className="col-md-12">
        <form>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label>Tên nhân viên</label>
              <input
                name="fName"
                type="text"
                className="form-control"
                onChange={(event) => this.isChange(event)}
                defaultValue={this.state.fName}
              />
            </div>
            <div className="form-group col-md-3">
              <label>Phone</label>
              <input
                name="fPhone"
                type="text"
                className="form-control"
                onChange={(event) => this.isChange(event)}
                defaultValue={this.state.fPhone}
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
            <div className="form-group col-md-3">
              <label>Tỉnh</label>
              <select
                name="fPermission"
                className="form-control"
                onChange={(event) => this.isChange(event)}
                defaultValue={this.state.fPermission}
              >
                <option>Chọn quyền...</option>
                <option value="1">Admin</option>
                <option value="2">Modrater</option>
                <option value="3">Member</option>
              </select>
            </div>
          </div>
        
          <div className="col-md-12"></div>
          <button 
            onClick={(event)=>this.submitForm(event)}
            //onClick={(event)=>this.submitForm(event)}
            //type="submit"
            className="btn btn-outline-success"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
