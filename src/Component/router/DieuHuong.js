import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Manager from "../TinTuc/Manager";
import ManagerMB from "../matbang/ManagerMB";
import Dashboard from "../main/Dashboard";
import Detail from "../TinTuc/Detail";
import ManagerT from "../ToaNha/Manager";
import Edit from "../ToaNha/Edit";
import QLNhanVien from "../NhanVien/Manager";
import dlUser from "../NhanVien/Data.json";
import EditNV from "../NhanVien/Edit";
export default class DieuHuong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dlUser,
      textSearch: "",
      userEditObj: {},
      isAdd: false,
    };
  }

  search = (dl) => {
    this.setState({
      textSearch: dl,
    });
  };
  editUser = (user) => {
    this.setState({ userEditObj: user });
  };
  getNewDataUser = (id, name, tel, permission) => {
    var item = {};
    item.id = id;
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    console.log(items);
    this.setState({ data: items });
  };
  isAdd = (event) => {
    this.setState({ isAdd: event });
  };
  getInfoEdit = (event) => {
    this.state.data.forEach((value, key) => {
      if (value.id === event.id) {
        console.log("trùng");
        value.name = event.name;
        value.tel = event.tel;
        value.permission = event.permission;
      }
    });
  };
  deleteUser = (id) => {
    var temData = this.state.data.filter((item) => item.id !== id);
    this.setState({ data: temData });
  };
  render() {
    localStorage.setItem("key1","haha")
    var ketQua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.textSearch) !== -1) {
        ketQua.push(item);
      }
    });
    return (
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/NhanVien">
          <QLNhanVien
            dataUser={ketQua}
            search={(dl) => this.search(dl)}
            editFun={(user) => this.editUser(user)}
            isAdd={(event) => this.isAdd(event)}
            delete={(id)=>this.deleteUser(id)}
          />
        </Route>
        <Route exact path="/sua-nhan-vien">
          <EditNV
            add={(id, name, tel, permission) =>
              this.getNewDataUser(id, name, tel, permission)
            }
            infoEdit={(event) => this.getInfoEdit(event)}
            useIsAdd={this.state.isAdd}
            edit={this.state.userEditObj}
          />
        </Route>
        <Route exact path="/tinmoi">
          <Manager />
        </Route>
        <Route exact path="/matbang">
          <ManagerMB />
        </Route>
        <Route exact path="/duan">
          <ManagerT />
        </Route>
        <Route exact path="/sua">
          <Edit />
        </Route>
        <Route exact path="/tin-moi/:slug.:id" component={Detail} />
      </Switch>
    );
  }
}
