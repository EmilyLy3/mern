import React from 'react';
import { Link } from 'react-router-dom';


const NoAuthor = () => {
    return (
        <div>
            <h4 className="text-danger mt-5 mb-5">We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?</h4>
            <Link to="/add_author">Add author</Link>
        </div>
    );
};


export default NoAuthor;