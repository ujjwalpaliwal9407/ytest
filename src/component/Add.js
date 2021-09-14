import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empolyeeData: [],
            act: 0,
            index: '',
            list:[],
            flag:0
        }
    }
    
    handleSubmit = async (e) => {
        
        // window.location.reload(false);
        // e.preventDefault();
        let list = await localStorage.getItem("crud")
        list = JSON.parse(list)
          this.setState({
            employeeData:list
        })
        console.log(666,this.state.empolyeeData)
        var employeeData = this.state.empolyeeData;
        let name = this.refs.txtName.value;
        let number = this.refs.txtNumber.value;
        let email = this.refs.txtEmail.value;
        this.setState({
            flag:1
        })
        if (this.state.act===0) {
            let newEmployee = {
                "name": name,
                "number": number,
                "email": email
            }
            list=list?list:[]
            if(newEmployee.name!=""&&newEmployee.number!=""&&newEmployee.email!="")
            {
                console.log(545454,newEmployee)
                list.push(newEmployee);
            }
            this.setState({
                employeeData: list,
                act: 0,
                flag:0
            })
        }
        else {
          
            let index = this.state.index; 
            console.log(999,this.state.employeeData[index])
            this.state.employeeData[index].name = name;
            this.state.employeeData[index].number = number;
            this.state.employeeData[index].email = email;
            this.setState({
                employeeData: this.state.employeeData
            })
       
        }
        
        localStorage.setItem("crud",JSON.stringify(list));
    }

    async componentDidMount(){
        
        let list = await localStorage.getItem("crud")
        list = JSON.parse(list)
          this.setState({
            employeeData:list
        })
    }
    

    
    handleDelete = (index) => {
        let employeeData = this.state.employeeData;
        employeeData.splice(index, 1);
        this.setState({
            employeeData: employeeData
        });
        localStorage.setItem("crud",JSON.stringify(employeeData));
    }


    handleUpdate = (e, index) => {
        e.preventDefault()
         
        let employeeData = this.state.employeeData[index];
        this.refs.txtName.value = employeeData.name;
        this.refs.txtNumber.value = employeeData.number;
        this.refs.txtEmail.value = employeeData.email;
        this.setState({
            act: 1,
            index: index
        });
        
    }


    render() {
        let employeeData=this.state.employeeData;
        return (      
            <div style={{ marginTop: '50px' }}>
                <form ref="myform" className="col s12">
                    <div className="row">
                        <div className="input-field col s4">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" required className="validate" ref="txtName" />
                            <label for="icon_prefix">User Name</label>
                        </div>
                        <div className="input-field col s4">
                            <i className="material-icons prefix">phone</i>
                            <input id="icon_telephone" required type="tel" className="validate" ref="txtNumber" />

                            <label for="icon_telephone">Telephone</label>
                        </div>
                        <div className="input-field col s4">
                            <i className="material-icons prefix">email</i>
                            <input id="email" name="email" type="email" required  ref="txtEmail" className="validate" />
                            <label for="email">Email Address</label>
                        </div>
                    </div>
                    <button onClick={this.handleSubmit} className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>

                {(employeeData == undefined) ? <h4>No data found table is empty</h4> :
                    <table className="centered" style={{ marginTop: "20px", backgroundColor: "lightgray" }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employeeData!=null && employeeData.map((data, index) =>
                                <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.number}</td>
                                <td>{data.email}</td>
                                <td><Button onClick={(e) => this.handleUpdate(e, index)} variant="primary">Update</Button><Button style={{ marginLeft: 10 }} onClick={(e) => this.handleDelete(index)} variant="danger">Delete</Button></td>
                            </tr>
                         )
                            }
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}
