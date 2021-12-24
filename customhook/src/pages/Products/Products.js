import React from 'react'
import useFetch from '../../hooks/useFetch'
import { get } from '../../services/auth'

const Products = () => {

    const [allUsers, allUsersError, allUsersApiCall] = useFetch({
        service: () => get('https://reqres.in/api/users?page=2')
    })
    const [user, userError, userApiCall] = useFetch({
        service: () => get('https://reqres.in/api/unknown/23')
    })

    console.log('allUsers', allUsers);
    console.log('user', user);

    return (
        <div>
            <button onClick={allUsersApiCall}>Get List users</button>
            <button onClick={userApiCall}>Get single user</button>
            {userError && <p style={{color: 'red'}}>{userError}</p>}
        </div>
    )
}

export default Products
