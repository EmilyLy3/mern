import React, {useState} from 'react';

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
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input onChange={(e) => setLastName(e.target.value)} type="text" name="lastName" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" className="form-control"/>
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