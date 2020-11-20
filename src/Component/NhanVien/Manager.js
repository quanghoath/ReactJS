import React, { Component } from "react";
import TableDataRow from "./TableDataRow";
import {NavLink} from 'react-router-dom'

export default class QLNhanVien extends Component {
  mappingDataRow = () =>
    this.props.dataUser.map((value, key) => (
      <TableDataRow dataRow={value} key={key} stt={key} editFunClick ={(user)=>{this.props.editFun(value)}} 
      isAdd = {(event)=>this.props.isAdd(false)}
      delete = {(id)=>this.props.delete(id)}
      />
    ));
  isNhap = (event) => {
    this.props.search(event.target.value)
  };
  render() {
   
    return (
      <div className="">
        <div className="card">
          <div className="card-header py-1">
              <NavLink
            to="sua-nhan-vien"
            className="btn btn-outline-primary  btn-sm"
            onClick={(event)=>this.props.isAdd(true)}
          >
            <i className="fas fa-edit">Add</i>
          </NavLink>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <div
                id="dataTable_wrapper"
                className="dataTables_wrapper dt-bootstrap4"
              >
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="dataTables_length" id="dataTable_length">
                      <label>
                        <select
                          name="dataTable_length"
                          aria-controls="dataTable"
                          className="custom-select custom-select-sm form-control form-control-sm"
                        >
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select>{" "}
                        entries
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div id="dataTable_filter" className="dataTables_filter">
                      <label>
                        Search:
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder="Tên, SĐT, tuổi, địa chỉ"
                          aria-controls="dataTable"
                          onChange={(event) => this.isNhap(event)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table
                      className="table table-bordered dataTable"
                      id="dataTable"
                      width="100%"
                      cellSpacing={0}
                      role="grid"
                      aria-describedby="dataTable_info"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr role="row">
                          <th>STT</th>
                          <th
                            className="sorting_asc"
                            tabIndex={0}
                            aria-controls="dataTable"
                            rowSpan={1}
                            colSpan={1}
                            aria-sort="ascending"
                            aria-label="Name: activate to sort column descending"
                            style={{ width: "195px" }}
                          >
                            Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="dataTable"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Position: activate to sort column ascending"
                            style={{ width: "294px" }}
                          >
                            Phone
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="dataTable"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Office: activate to sort column ascending"
                            style={{ width: "142px" }}
                          >
                            Age
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="dataTable"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Age: activate to sort column ascending"
                            style={{ width: "66px" }}
                          >
                            Permission
                          </th>

                          <th></th>
                        </tr>
                      </thead>
                      <tbody>{this.mappingDataRow()}</tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div
                      className="dataTables_info"
                      id="dataTable_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 10 of 57 entries
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="dataTable_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="dataTable_previous"
                        >
                          <button
                            href="#"
                            aria-controls="dataTable"
                            data-dt-idx={0}
                            tabIndex={0}
                            className="page-link"
                          >
                            Previous
                          </button>
                        </li>
                        <li className="paginate_button page-item active">
                          <button
                            href="#"
                            aria-controls="dataTable"
                            data-dt-idx={1}
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </button>
                        </li>
                        <li className="paginate_button page-item ">
                          <button
                            href="#"
                            aria-controls="dataTable"
                            data-dt-idx={2}
                            tabIndex={0}
                            className="page-link"
                          >
                            2
                          </button>
                        </li>
                        <li
                          className="paginate_button page-item next"
                          id="dataTable_next"
                        >
                          <button
                            href="#"
                            aria-controls="dataTable"
                            data-dt-idx={7}
                            tabIndex={0}
                            className="page-link"
                          >
                            Next
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
