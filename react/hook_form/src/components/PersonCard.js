import React, { useState } from 'react';

const PersonCard = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" className="form-control" />
                    {firstName.length < 2 && firstName.length != 0 ?
                        <p className="text-danger">First name must be at least 2 characters</p> :
                        ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input onChange={(e) => setLastName(e.target.value)} type="text" name="lastName" className="form-control" />
                    {lastName.length < 2 && lastName.length != 0 ?
                        <p className="text-danger">Last name must be at least 2 characters</p> :
                        ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" className="form-control" />
                    {email.length < 5 && email.length != 0 ?
                        <p className="text-danger">Email must be at least 5 characters</p> :
                        ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="form-control" />
                    {password.length < 8 && password.length != 0 ?
                        <p className="text-danger">Password must be at least 8 characters</p> :
                        ""
                    }
                    {password != confirmPassword ?
                        <p className="text-danger">Passwords do not match</p> :
                        ""
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" className="form-control" />
                    {confirmPassword.length < 8 && confirmPassword.length != 0 ?
                        <p className="text-danger">Password must be at least 8 characters</p> :
                        ""
                    }
                    {password != confirmPassword ?
                        <p className="text-danger">Passwords do not match</p> :
                        ""
                    }
                </div>
            </form>
            <br />
            <hr />
            <br />
            <h3>Your Form Data</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};


export default PersonCard;