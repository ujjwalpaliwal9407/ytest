import React, { Component } from "react";
import { Button } from 'react-bootstrap'
class TableComp extends Component {
  render() {
    const employeeInfo = this.props.employeeInfo;
    return (
      <div>
         {employeeInfo.length === 0 ?
              <h1>No Data Available</h1>
            :
        <table className="centered" style={{ marginTop:"40px", backgroundColor: "lightgray" }}>
          <thead >
            <tr>        
            <th>Name</th>
            <th>Email Address</th>
            <th>Number</th>
            </tr>
          </thead>

          <tbody>
            {employeeInfo.map((employee, index) => (
              <tr>
                {index === this.props.indexid ? (
                  <td>
                    <input
                      type="text"
                      value={this.props.fname}
                      name="fname"
                      onChange={this.props.changeHandler}
                    />
                  </td>
                ) : (
                  <td> {employee.fname} </td>
                )}

                {index === this.props.indexid ? (
                  <td>
                    <input
                      type="email"
                      value={this.props.email}
                      name="email"
                      onChange={this.props.changeHandler}
                    />
                  </td>
                ) : (
                  <td> {employee.email} </td>
                )}

                {index === this.props.indexid ? (
                  <td>
                    {" "}
                    <input
                      type="text"
                      value={this.props.phone}
                      name="phone"
                      onChange={this.props.changeHandler}
                    />{" "}
                  </td>
                ) : (
                  <td> {employee.phone} </td>
                )}

                <td>
                  <Button variant="danger"
                    className="fas fa-minus-circle"
                    onClick={() => this.props.deleteHandler(index)}
                  >delete</Button >
                  <Button style={{ marginLeft: 10 }}  variant="primary"
                    className="fas fa-pen-square"
                    onClick={() => this.props.updateHandler(index)}
                  >edit</Button >
                  {index === this.props.indexid ? (
                    <Button style={{ marginLeft: 10 }}  variant="primary"
                      className="fas fa-save"
                      onClick={() => this.props.saveHandler()}
                    >save</Button >
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
          </table>
          }
      </div>
    );
  }
}

export default TableComp;

