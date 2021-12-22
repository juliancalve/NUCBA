import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Balance from '../pages/Balance'
import Login from '../pages/Login'
import Practica from '../pages/Practica'
import Register from '../pages/Register'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/balance' element={<Balance />} />
                <Route path='/practice' element={<Practica />} />
                <Route path='*' element={<Navigate to='/practice' />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
