import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';


const OneProduct = () => {
    const {id} = useParams();


    const [productInfo, setProductInfo] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log("The response is -->", res)
                setProductInfo(res.data.results)
            })
            .catch(err => console.log(err))
    }, [id])


    return (
        <div>
            <h3>{productInfo.title}</h3>
            <p>Price: ${productInfo.price}</p>
            <p>Description: {productInfo.description}</p>
        </div>
    );
};


export default OneProduct;