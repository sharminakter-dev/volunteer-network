import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Auth from '../Auth/Auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const location = useLocation();

    if(!userInfo.isLoggedIn ){
        return <Navigate to='/auth' state={{from:location}} />
    }else{
        return <Outlet/>
    }
};

export default PrivateRoute;