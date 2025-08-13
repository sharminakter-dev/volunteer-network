import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Auth from '../Auth/Auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const location = useLocation();

    if(userInfo.loading){
        return null
    }
    if(userInfo?.isLoggedIn ){
        return <Outlet/>
    }else{
        return <Navigate to='/auth' state={{from:location}} />
    }
};

export default PrivateRoute;