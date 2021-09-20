import axios from 'axios';
import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';


const DeleteProduct = () => {
    const {id} = useParams();


    const history = useHistory();


    useEffect(() => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log("Deleting this -->", res)
            history.push("/")
        })
        .catch(err => console.log(err))
    })

    return (
        <div></div>
    );
};


export default DeleteProduct;