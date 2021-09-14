import React, { Component } from 'react'
import ChildA from '../task/ChildA'

const Hoc =(TakeComp)=>{
            const NewComp =()=>{
                return(<div>
                    <TakeComp name={"ujjwal"}/>
                </div>)
            }
            return NewComp;
        
}
export default Hoc;