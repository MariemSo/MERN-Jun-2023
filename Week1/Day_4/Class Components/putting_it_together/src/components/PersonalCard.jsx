import React, { Component } from 'react';

class PersonalCard extends Component{
    render(){
        const {firstName, lastName, age, hairColor="Brown"} = this.props;
        return(
            <div>
                <h1>{firstName},{lastName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
}


export default PersonalCard;