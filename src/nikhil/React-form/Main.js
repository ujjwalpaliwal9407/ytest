import React, { Component } from "react";
import FormComp from "./Form-comp/Form";
import TableComp from "./Table-comp/Table";
class Main extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      email: "",
      phone: "",
      indexid: "",
      employeeInfo: [],
      isEdit: false,
      errors: {},
    };
    this.input = React.createRef();
  }

  changeHandler = (e) => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleValidate = () => {
    var errors = {};
    var isValid = false;

    if (!this.state.fname) {
      isValid = true;
      errors["fname"] = "Name is Required";
    }

    if (!this.state.email) {
      isValid = true;
      errors["email"] = "Email is Required";
    }

    if (!this.state.phone) {
      isValid = true;
      errors["phone"] = "Phone is Required";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  };
  async componentDidMount(){
        
    let list = await localStorage.getItem("crud")
    list = JSON.parse(list)
      this.setState({
        employeeInfo:list
    })
}
  submitHandler = async (e) => {
    e.preventDefault();
    let list = await localStorage.getItem("crud")
    list = JSON.parse(list)
      this.setState({
        employeeInfo:list
    })
    if (await this.handleValidate()) {
      return null;
    }
    const employee = {
      fname: this.state.fname,
      email: this.state.email,
      phone: this.state.phone,
      indexid: this.state.indexid,
    };
    const employeeInfo = this.state.employeeInfo;
    employeeInfo.push(employee);

    this.setState({
      employeeInfo,
      fname: "",
      email: "",
      phone: "",
      indexid: "",
    });
    localStorage.setItem("crud",JSON.stringify(employeeInfo));
  };

  deleteHandler = (i) => {
    let employeeInfo = this.state.employeeInfo;
    employeeInfo.splice(i, 1);
    this.setState({
      employeeInfo,
    });
    localStorage.setItem("crud",JSON.stringify(employeeInfo));
  };

  updateHandler = (i) => {
    let employeeInfo = this.state.employeeInfo[i];
    this.setState({
      fname: employeeInfo.fname,
      email: employeeInfo.email,
      phone: employeeInfo.phone,
      indexid: i,
      isEdit: true,
    });
  };

  saveHandler = () => {
    const employee = {
      fname: this.state.fname,
      email: this.state.email,
      phone: this.state.phone,
      indexid: this.state.indexid,
    };
    const { indexid } = this.state;
    const employeeInfo = this.state.employeeInfo;
    if (indexid !== "") {
      employeeInfo[indexid] = employee;
    }
    this.setState({
      employeeInfo,
      fname: "",
      email: "",
      phone: "",
      indexid: "",
      isEdit: false,
    });
    localStorage.setItem("crud",JSON.stringify(employeeInfo));
  };

  render() {
    console.log(999, this.state);
    return (
      <div>
        <FormComp
          fname={this.state.isEdit ? "" : this.state.fname}
          email={this.state.isEdit ? "" : this.state.email}
          phone={this.state.isEdit ? "" : this.state.phone}
          errors={this.state.errors}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />

        <TableComp
          fname={this.state.fname}
          email={this.state.email}
          phone={this.state.phone}
          indexid={this.state.indexid}
          employeeInfo={this.state.employeeInfo}
          deleteHandler={this.deleteHandler}
          changeHandler={this.changeHandler}
          updateHandler={this.updateHandler}
          saveHandler={this.saveHandler}
        />
      </div>
    );
  }
}

export default Main;
