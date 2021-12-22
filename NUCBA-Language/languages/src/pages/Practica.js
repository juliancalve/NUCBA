import { useState } from 'react';

const Practica = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }

    const onSubmitValues = () => {

        const body = {
            firstName,
            lastName,
            age,
            // ...(age >= 18 && {
            //     isAdult: true
            // }),
            ...(age >= 18 && {
                ...(age <= 35 && age >= 30 && {
                    is30: true
                }),
                ...(age <= 45 && age >= 40 && {
                    is40: true
                }),
                isAdult: true
            }),
            ...(age < 18 && {
                parentsSign: true,
                firstName: `-${firstName}-`
            }),
            // ...(age <= 35 && age >= 30 && {
            //     is30: true
            // })


            //isAdult = true
            // parentsSign = true
        };

        // if(age >= 18){
        //     body.isAdult = true;
        //     if(age <= 35 && age >= 30){
        //         body.is30 = true;
        //     } else if (age <= 45 && age >= 40) {
        //         body.is40 = true;
        //     }
        // } else {
        //     body.parentsSign = true;
        //     body.firstName = `-${firstName}-`;
        // }

        console.log(body);
    }


    // firstName
    // lastName
    // isAdult
    // age
    // if is not adult -firstName-
    // if is not adult -> parentsSign
    // if is between 30 - 35 send is30

    return (
        <div>
            <input value={firstName} onChange={handleFirstNameChange} placeholder='FirstName' />
            <input value={lastName} onChange={handleLastNameChange} placeholder='LastName'/>
            <input value={age} onChange={handleAgeChange} placeholder='Age'/>
            <button onClick={onSubmitValues}>OnSubmit</button>
        </div>
    )
}

export default Practica
