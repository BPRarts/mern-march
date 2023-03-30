import React from 'react';
import { useParams } from 'react-router-dom';

const Hello = (props) => {
    const {color} =useParams()
    
   
   
    return (
        <div>
            <h2 style={{backgroundColor:color}} >The word is:hello </h2>
        </div>
    );
}

export default Hello;
