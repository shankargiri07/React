import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export function ReactCookies(){

    const [user, setUsers] = useState({UserName:'', Password:''});
    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    function handleUserName(e){
        setUsers({
            UserName:e.target.value,
            Password:user.Password
        })
    }
    function handleUserPassword(e){
        setUsers({
            UserName:user.UserName,
            Password:e.target.value
        })
    }

    const handleLoginClick = () => {
        setCookie('username', user.UserName, {path:'/', expires:new Date("2023-08-30 20:22")});
        alert('Login Success..')
    }

    const handleLogoutClick = () => {
        removeCookie('username');
        alert('User Logout..')
    }

    return(
        <div className="container-fluid">
            <h3 className="text-center">React Cookies</h3>
            <div>
                <h4>User Login</h4>
                <dl>
                   <dt>User Name</dt> 
                   <dd><input type="text" onChange={handleUserName}/></dd>
                   <dt>Password</dt>
                   <dd><input type="password" onChange={handleUserPassword}/></dd>
                   <div>
                        <button onClick={handleLoginClick}>Login</button>
                   </div>
                </dl>
            </div>
            <hr size="4" color="gray"/>
            
            <div>
                <h3>Home <button className="btn btn-link" onClick={handleLogoutClick}>Logout</button></h3> 
                Hello ! <span className="text-success">{cookies.username}</span>
            </div>
        </div>
    )
}