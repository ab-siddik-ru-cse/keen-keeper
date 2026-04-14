'use client'
import { createContext, useEffect, useState } from 'react';

// create context
export const AppContext = createContext();

// provider
export const AppProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch("/data/friendsData.json");
            const data = await res.json();
            setFriends(data);
        };
        loadData();
    }, []);


    return (
        <AppContext.Provider value={{friends}}>
            {children}
        </AppContext.Provider>
    );
};