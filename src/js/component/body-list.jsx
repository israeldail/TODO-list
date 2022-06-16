import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const List = () => {

    const [ToDo, setToDo] = useState("");
    const [ListToDo, setListToDo] = useState("");


    const addInput = () => {
        
    }

    return(

        <div className='listContainer'>
            <ul>
                <li className='inputLi'><input type="text" placeholder='What needs to be done?' /><p className='X'></p></li>
                <li><input className='inputLi2'  /><p className='X'>X</p></li>
                <li><input className='inputLi2'  /><p className='X'>X</p></li>
                <button>Click here</button>
            </ul>
        </div>

    )
}