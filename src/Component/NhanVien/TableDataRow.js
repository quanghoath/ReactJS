import React, { Component } from "react";

import { NavLink } from "react-router-dom";
export default class TableDataRow extends Component {
  editFunClick = ()=>{
    this.props.editFunClick();
    this.props.isAdd();
  }
  delete=(id)=>{
    this.props.delete(id);
  }
  render() {
    console.log(this.props.dataRow);
    return (
      <tr role="row" className="odd">
        <td>{this.props.stt + 1}</td>

        <td className="sorting_1">{this.props.dataRow.name}</td>
        <td>{this.props.dataRow.tel}</td>
        <td>{this.props.dataRow.age}</td>
        <td>{this.props.dataRow.permission}</td>
        <td>
          <NavLink
          onClick={()=>this.editFunClick()}
            to="sua-nhan-vien"
            className="btn btn-outline-primary  btn-sm"
          >
            <i className="fas fa-edit"></i>
          </NavLink>
          <NavLink to="NhanVien"  onClick={(id)=>this.delete(this.props.dataRow.id)} className="btn btn-outline-danger  btn-sm">
            <i className="fas fa-trash"></i>
          </NavLink>
        </td>
      </tr>
    );
  }
}
