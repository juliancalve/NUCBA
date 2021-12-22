import React, { useState } from 'react'

const UserTest = () => {

    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const addManyUsers = (manyUsers) => {
        setUsers([...users, ...manyUsers]);
    }

    const findByName = (name) => {
        return users.find( u => u.name === name );
    }
    
    const filterByAge = (age) => {
        
        return users.filter( u => u.age >= age );
    }

    return {
        users,
        findByName,
        addUser,
        filterByAge,
        addManyUsers
    }
}

export default UserTest;
