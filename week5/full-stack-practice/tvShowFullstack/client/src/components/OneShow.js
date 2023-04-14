import React, {useState,useEffect}from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
const OneShow = (props) => {
    const [show, setShow] = useState({})
    const {id} = useParams()
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneShow/${id}`)
            .then((res) => {
                console.log(res.data.show);
                setShow(res.data.show);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])
    return (
        <div>
            <h1> Title:</h1>
        </div>
)}


export default OneShow;
