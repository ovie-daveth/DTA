import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';


export const UserContext = createContext({})

export function ContextProvider({children}){
    const [user, setUser] = useState(null)
    useEffect(()=>{
        if(!user){
            axios.get("http://localhost:3001/profile").then(({data})=>{
                setUser(data)
            })
        }
    }, [])
    return(
        <UserContext.Provider value={user, setUser}>
            {children}
        </UserContext.Provider>
    )
}