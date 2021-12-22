import React from 'react'

const Card = ({id, email, first_name, last_name, avatar}) => {
    return (
        <div style={{display: 'flex'}}>
            <div style={{ border: '1px solid #ccc', display: 'flex', flexDirection: 'column'}}>
                <b>id: {id}</b>
                <p>Email: {email}</p>
                <p>{first_name} {last_name}</p>
                <img src={avatar} alt="foto"/>
            </div>
        </div>
    )
}

export default Card;
