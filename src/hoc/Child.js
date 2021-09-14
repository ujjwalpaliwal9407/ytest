import React from 'react'
import Hoc from './Hoc';
 function Child(props) {
    return (
        <div>
            <h1>Name:{props.name}</h1>
        </div>
    )
}
export default Hoc(Child);