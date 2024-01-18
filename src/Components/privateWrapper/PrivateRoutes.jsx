import React from 'react';
import { useSelector } from 'react-redux';
import {Outlet , Navigate} from 'react-router-dom';

const PrivateRoutes = () => {

    const user = useSelector((state) => state.login.userData);
  return (
    <>
        {user ? <Outlet/> : <Navigate to={'/'}/>}
    </>
  )
}

export default PrivateRoutes