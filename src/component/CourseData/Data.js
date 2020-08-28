import React from 'react';
import './Data.css'
const Data = (props) => {
    const {name,price,instructor} = props.courseValue;

    return (
        <div className='main-data'>
            <div className='data'>
                <h4>{name}</h4>
                <p>By {instructor}</p>
                 <h2>${price}</h2>
                 <button onClick={() => props.handleAdd(props.courseValue)} className='enroll-btn'>Enroll</button>
            </div>
        </div>
    );
};

export default Data;