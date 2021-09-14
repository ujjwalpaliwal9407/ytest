import React, { Component } from 'react'

export default class ChildC extends Component {
    render() {
        return (
            <div>
                <h1>ChildC={this.props.selected}</h1>
                
            </div>
        )
    }
}
