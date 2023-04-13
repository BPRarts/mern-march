import React,{useState} from 'react';
import axios from 'axios'

const CreateShow = (props) => {
    const [show,setShow] = useState({
        title:'',
        releaseYear:1920,
        network:'',
        creator:'',
        genre:''

    })
    const changeHandler = (e) => {
        setShow({...show,[e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newShow', show)
             .then((res) =>{
                console.log(res);
              })     
            .catch((err) => {
                console.log(err)
            }) 
    }





    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" onChange={changeHandler}/>
                </div>
                <div>
                    <label>Release Year:</label>
                    <input type="number" name="releaseyear" onChange={changeHandler}/>
                </div>
                <div>
                    <label>Network:</label>
                    <input type="text" name="network" onChange={changeHandler}/>
                </div>
                <div>
                    <label>Creator:</label>
                    <input type="text" name="creator" onChange={changeHandler}/>
                </div>
                <div>
                    <label>Genre::</label>
                    <input type="text" name="genre" onChange={changeHandler}/>
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default CreateShow;
