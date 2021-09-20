import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const AllProducts = () => {
    const [allTheProducts, setAllTheProducts] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log("The response is -->", res)
                console.log("This is what we are setting as allProducts -->", res.data.results)
                setAllTheProducts(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <h1>All Products:</h1>
            {
                allTheProducts.map((product, i) => {
                    return <div className="d-flex justify-content-between" key={i}>
                        <p><Link to={`/products/${product._id}`}>{product.title}</Link></p>
                        <p><Link to={`/products/edit/${product._id}`}>Edit</Link> | <Link to={`/products/delete/${product._id}`}>Delete</Link></p>
                    </div>
                })
            }
        </div>
    );
};


export default AllProducts;