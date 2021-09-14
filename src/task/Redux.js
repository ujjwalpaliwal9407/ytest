import React, { Component } from 'react'
import {connect} from 'react-redux';
class Redux extends Component {
    render() {
        return (
            <div>
                <h1>Redux {this.props.name}</h1>
                <button onClick={()=>this.props.changename("ujjwal paliwal")}>Change Name</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        name:state.name
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changename:name=>dispatch({type:'change_name',payload:name})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Redux)