import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageNow: this.props.age
        };
    }


    render() {
        const addBirthday = () => {
            this.setState({ageNow: this.state.ageNow+1});
        }


        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.ageNow}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={addBirthday}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}

export default PersonCard;