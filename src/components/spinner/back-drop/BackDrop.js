import React from 'react';
import './BackDrop.css';
import Spinner from "../Spinner";

const BackDrop = (props) => {
    return (
        <div className='BackDrop'>
            <Spinner/>
        </div>
    )
};

export default BackDrop;