import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {
    
    const { productList, setProductList } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        

        axios.post("http://localhost:8000/api/newProducts", {
                title, 
                price, 
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
               
                setProductList([...productList, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container">
            <header className="title">Product Manager</header>
            <br></br>

            <form onSubmit={submitHandler}>
                <div className="form">
                    <label>Title:</label>
                    
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                <br />

                <div className="form">
                    <label>Price:</label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                <br />

                <div className="form">
                    <label>Description:</label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                    />
                </div>

                <br />
                
                <input class="submit" type="submit" value="Create" />
            </form>
        </div>
    );
};

export default CreateProduct;