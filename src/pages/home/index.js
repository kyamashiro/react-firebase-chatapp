import React, {useEffect} from 'react';
import {useAuth} from "contexts/AuthContext";

export const Home = () => {
    const {user} = useAuth();

    useEffect(() => {
        console.log(user)
    })

    const props = {
        user
    }

    return (
        <div>
            <h1>Home</h1>
            {!!user || <p>未ログイン</p>}
            {!!user && <SignIn {...props}/>}
        </div>
    )
}

const SignIn = (props) => {
    return (
        <div>
            <p>ログイン中</p>
            <p>{props.user.displayName}</p>
            <p>{props.user.email}</p>
            <p>{props.user.uid}</p>
        </div>
    )
}