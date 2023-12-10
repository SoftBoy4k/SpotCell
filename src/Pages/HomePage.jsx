import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Map from '../components/Map';
import { useAuth } from '../hooks/useAuth';

const HomePage = () => {

    const { isAuth } = useAuth();

    const navigate = useNavigate();

    console.log(isAuth)

    useEffect(() => {
            if (!isAuth) {
                navigate("register/")
            }
        }, 
        [isAuth]
    )

    return (
        <div>
            <Map/>
        </div>
    )
}

export default HomePage