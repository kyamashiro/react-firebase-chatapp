import React, {useContext, useEffect, useState} from "react"
import {auth} from 'firebase/init'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const value = {
        user,
    }

    useEffect(() => {
        // Firebase Authのメソッド。ログイン状態が変化すると呼び出される
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false)
        });
    }, []);

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}