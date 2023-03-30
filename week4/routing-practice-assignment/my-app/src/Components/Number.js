import React from 'react';
import { useParams } from 'react-router-dom';

const Number = (props) => {
    const {id} = useParams()
    return (
        <div>
            <h2>The Number is: {id}</h2>
        </div>
    );
}

export default Number;
