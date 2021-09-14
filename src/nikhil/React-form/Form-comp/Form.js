import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./form.css";
class FormComp extends Component {
  render(props) {
    return (
      <div>
       
        <div className="row" style={{marginTop:20}}>
       
       <div className="input-field col s4">
           <i className="material-icons prefix">account_circle</i>
           <input id="icon_prefix" type="text" name="fname"  value={this.props.fname} required className="validate" onChange={this.props.changeHandler} />
           {this.props.errors.fname}
           <label for="icon_prefix">User Name</label>
       </div>
       <div className="input-field col s4">
           <i className="material-icons prefix">phone</i>
           <input name="phone" value={this.props.phone} id="icon_telephone" required type="tel" className="validate" onChange={this.props.changeHandler} />
           {this.props.errors.phone}
           <label for="icon_telephone">Telephone</label>
       </div>
       <div className="input-field col s4">
           <i className="material-icons prefix">email</i>
           <input id="email" name="email" value={this.props.email} type="email" required name="email" onChange={this.props.changeHandler} className="validate" />
           {this.props.errors.email}
           <label for="email">Email Address</label>
       </div>
   </div>

          <Button variant="primary" onClick={this.props.submitHandler} type="submit">
            Submit
          </Button>
        
      </div>
    );
  }
}

export default FormComp;
