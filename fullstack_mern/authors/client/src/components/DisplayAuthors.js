import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const DisplayAuthors = () => {
    const [allAuthors, setAllAuthors] = useState([]);

    const [deleteClicked, setDeleteClicked] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log("Response for getting all authors -->", res)
                res.data.results.sort(function ( a, b ) {
                    if (a.name < b.name){
                        return -1;
                    }
                    if (a.name > b.name){
                        return 1;
                    }
                    return 0;
                })
                setAllAuthors(res.data.results)
            })
            .catch(err => console.log(err))
        }, [deleteClicked])


    console.log("SORTED AUTHORS -->", allAuthors)


    const deleteClickHandler = (e, id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res=>{
                console.log("Response after axios delete -->", res)
                setDeleteClicked(!deleteClicked)

            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <Link to="/add_author">Add an Author</Link>
            <p className="mt-3 mb-3">We have quotes by:</p>
            <table  className="table table-striped table-primary table-bordered border-dark">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAuthors.map((author, i) => {
                            return <tr key={i}>
                                <th>{author.name}</th>
                                <th>
                                    <Link className="btn btn-secondary" to={`/authors/edit/${author._id}`}>Edit</Link> | <button onClick={(e)=>deleteClickHandler(e, author._id)} className="btn btn-danger">Delete</button>
                                </th>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};



export default DisplayAuthors;