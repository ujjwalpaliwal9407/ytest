import React, { Component } from 'react'
import { connect } from 'react-redux';
import {anotherAction} from './Action';
class Redux1 extends Component {
    render() {
        return (
            <div>
                <h1> Redux1 {this.props.name1}</h1>
                <button onClick={()=>this.props.changename("ujjwal paliwal 1")}>Change Name</button>
            </div>
        )
    }
}

  const mapStateToProps=(state)=>{
    return{
        name1:state.name1
    }
  } 
  
  const mapDispatchToProps=(dispatch)=>{
    return{
      changename:name1=>dispatch(anotherAction(name1))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Redux1)
  