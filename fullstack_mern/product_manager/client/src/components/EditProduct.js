import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const EditProduct = () => {
    const {id} = useParams();


    const history = useHistory();


    const [productInfo, setProductInfo] = useState({});


    // getting the product to edit by id
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log("The response is -->", res)
                setProductInfo(res.data.results)
            })
            .catch(err => console.log(err))
    }, [id])


    // saving the changes into the form
    const changeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }


    // sending the changes to be saved via PUT and redirecting to view product page
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, productInfo)
            .then(res => {
                console.log("Response after submitting updated info --> ", res)
                history.push(`/products/${id}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>Edit {productInfo.title}</h3>
            <form onSubmit={(e)=>submitHandler(e)}>
                <div className="form-group mt-3">
                    <label htmlFor="title">Title:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="title" value={productInfo.title} className="form-control"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="price">Price:</label>
                    <input onChange={(e)=>changeHandler(e)} type="number" name="price" value={productInfo.price} className="form-control"/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="description">Description:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="description" value={productInfo.description} className="form-control"/>
                </div>
                <input className="mt-3" type="submit" value="Update" />
            </form>
        </div>
    );
};


export default EditProduct;