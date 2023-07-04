import React , { useState }from 'react';

const BirthdayCard = ({firstName, lastName, initAge,hairColor="brown"}) => {
        const [age, setAge] = useState(parseInt(initAge));
        const birthday = () => {
            setAge(age+1)
        }
        return(
            <div>
                <h1>{ lastName }, { firstName }</h1>
                <p>Age: { age }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={ birthday }>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
export default BirthdayCard
