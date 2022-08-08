import React from 'react'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login'
import PrivateRoutes from './utils/PrivateRoute'

export default function App() {
  return (
    <>
      <Routes>

        <Route element={ <PrivateRoutes/> }>
          <Route exact path='/' element={ <Dashboard/> } />
        </Route>
        
        <Route path='/login' element={ <Login/> } />

      </Routes>
    </>
  )
}

