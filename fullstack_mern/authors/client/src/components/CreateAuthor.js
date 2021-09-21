import React, {useState} from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";


const CreateAuthor = () => {
    const [formInfo, setFormInfo] = useState({
        name: ""
    })

    const history = useHistory()

    const [validationErrors, setValidationErrors] = useState({})


    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", formInfo)
            .then(res => {
                console.log("Response after submitting form info --> ", res)
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
            <h5 className="mt-3">Add a new author:</h5>
            <form onSubmit={(e)=>submitHandler(e)}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name:</label>
                    <input onChange={(e)=>changeHandler(e)} type="text" name="name" className="form-control"/>
                    <p className="text-danger">{validationErrors.name?.message}</p>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
            <Link to="/" className="btn btn-secondary mt-3">Cancel</Link>
        </div>
    );
};

export default CreateAuthor;