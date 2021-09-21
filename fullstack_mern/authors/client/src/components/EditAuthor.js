import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { useParams } from 'react-router';


const EditAuthor = () => {
    const {id} = useParams();

    const [authorInfo, setAuthorInfo] = useState([]);

    const history = useHistory();

    const [validationErrors, setValidationErrors] = useState({});


    useEffect(() => {
            axios.get(`http://localhost:8000/api/authors/${id}`)
                .then(res=>{
                    console.log("Response for getting one author -->", res)
                    setAuthorInfo(res.data.results)
                })
                .catch(err => console.log(err))
        }, [])


    const changeHandler = (e) => {
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, authorInfo)
            .then(res => {
                console.log("Response after making put request --> ", res)
                if(res.data.err) {
                    setValidationErrors(res.data.err.errors)
                } else {
                    history.push("/")
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <Link to="/">Home</Link>
            <h5 className="mt-3">Edit this author:</h5>
            <form onSubmit={(e)=>submitHandler(e)}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="name" value={authorInfo.name} className="form-control"/>
                    <p className="text-danger">{validationErrors.name?.message}</p>
                </div>
                <input type="submit" value="Update" className="btn btn-primary"/>
            </form>
            <Link to="/" className="btn btn-secondary mt-3">Cancel</Link>
        </div>
    );
};



export default EditAuthor;