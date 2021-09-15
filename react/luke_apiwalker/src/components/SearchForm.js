import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const SearchForm = () => {
    // state variable to store info from the form
    const [formInfo, setFormInfo] = useState({
        category: "people",
        id: ""
    })


    // state variable to store the categories from api call
    const [categories, setCategories] = useState([]);


    const history = useHistory();


    // on page load, call will be made via axios to the star wars api to get all the categories and then store them in the "categories" variable as a list
    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(response => {
                setCategories(Object.keys(response.data))
            })
            .catch(error => console.log(error))
            console.log(categories)
    }, [])


    // tracking changes on the form and saving the inputs info the form info
    const changeHandler = (e) => {
        console.log("The key is -->", e.target.name);
        console.log("The value is -->", e.target.value);
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        });
    }


    const submitHandler = (e) => {
        // prevent default of page reload on submit
        e.preventDefault();
        console.log("Form has been submitted --> ", formInfo)
        // redirect page using useHistory
        history.push(`/${formInfo.category}/${formInfo.id}`)
    }



    return (
        <div>
            <form onSubmit={(e)=>submitHandler(e)}>
                <div>
                    <label htmlFor="category">Search for: </label>
                    <select onChange={(e)=>changeHandler(e)} name="category">
                        {
                            categories.map((category, i) => {
                                return <option key={i} value={category}>{category}</option>
                            })
                        }
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="number">ID: </label>
                    <input  onChange={(e)=>changeHandler(e)} type="number" name="id"/>
                </div>
                <br />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
};


export default SearchForm;