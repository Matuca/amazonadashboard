import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {

    let auth = false;
    var ls = localStorage.getItem("auth")

    ls === process.env.REACT_APP_AUTH_TOKEN ? auth = true : auth = false

    return (
        auth === true ? <Outlet/> : <Navigate to={"/login"}/>
    )

}