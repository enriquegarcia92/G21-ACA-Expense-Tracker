import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

const RequireAuth = () =>{

    const token = localStorage.getItem("token")
    const decodedToken = jwtDecode(token)
    var dateNow = new Date();
    const location = useLocation();

    return (
        token && decodedToken.exp*1000 < dateNow.getTime() === false
        ? <Outlet/>
        : <Navigate to='/login' state={{from: location}} replace/>
    );
}

export default RequireAuth;