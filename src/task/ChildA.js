import React, { Component } from 'react'
import ChildC from './ChildC'
import ChildB from './ChildB'
import Hoc from '../hoc/Hoc';
 class ChildA extends Component {
    constructor(props){
        super(props);
        this.state={
            selected:''
        }
        
    }
    changeSelected = (val) => {
        this.setState({selected: val})
   }
   
    render() {
        return (
            <div>
                <ChildB changeSelected = {(val)=> {this.changeSelected(val)}} />
                <ChildC selected={this.state.selected}/>
                <h1>Child A Name:{this.props.name}</h1>
            </div>
        )
    }
}
export default Hoc(ChildA);