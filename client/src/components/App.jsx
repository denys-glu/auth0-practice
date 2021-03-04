import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';


function App() {
    const [accessToken, setAccessToken] = useState("");
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    console.log(user)
    const pullData = async () => {
        try {
            const token = await getAccessTokenSilently({
                audience: "https://dendev.us.auth0.com/api/v2/",
                scope: "read:current_user"
            });
            setAccessToken(token);
            console.log('token', token)


            const res = await axios.get('http://localhost:8000/api/projects/',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("res", res)
          } catch (e) {
            console.log(e);
          }

        
    }
    if (isLoading) {
        return <div>Is Loading....</div>
    }
    return (
        <div>
            <LoginButton />
            <LogoutButton />
            {
                isAuthenticated && (
                    <div>
                        <img src={user.picture} alt={user.name} />
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                )}
            <button onClick={() => pullData()}>Get data</button>
        </div>
    )
}

export default App

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
        </button>
    );
};