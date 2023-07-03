import React, { Component } from 'react';

class PersonalCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            userAge: parseInt(this.props.age)
        }
    
    }
     increment(){
        this.setState({
            userAge : this.state.userAge + 1
        })
       ;}
    render() {
        const {firstName, lastName, hairColor="Brown"} = this.props;
        return(
            <div>
                <h1>{firstName}, {lastName}</h1>
                <p>Age: {this.state.userAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={()=>this.increment()} >Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}


export default PersonalCard;