import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [formInfo, setFormInfo] = useState({
        title: null,
        price: null,
        description: null
    })


    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", formInfo)
            .then(res => {
                console.log("Response after submitting form info --> ", res)
            })
            .catch(err => console.log(err))
    }



    return (
        <div>
            <form onSubmit={(e)=>submitHandler(e)}>
                <div className="form-group mt-3">
                    <label htmlFor="title">Title:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="title" className="form-control"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="price">Price:</label>
                    <input onChange={(e)=>changeHandler(e)} type="number" name="price" className="form-control"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="description">Description:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="description" className="form-control"/>
                </div>
                <input className="mt-3" type="submit" value="Create" />
            </form>
        </div>
    );
};


export default ProductForm;