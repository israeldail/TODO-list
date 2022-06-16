import React from 'react';
import ReactDOM from 'react-dom';

export const List = () => {

    return(
        <div className='listContainer'>
            <ul>
                <li className='inputLi'><input placeholder='What needs to be done?' /><p className='X'>X</p></li>
                <li><input className='inputLi2'  /><p className='X'>X</p></li>
                <li><input className='inputLi2'  /><p className='X'>X</p></li>
                
                
                
            </ul>
        </div>

    )
}