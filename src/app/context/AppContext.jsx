'use client'
import { createContext, useEffect, useState } from 'react';

// create context
export const AppContext = createContext();

// provider
export const AppProvider = ({ children }) => {

    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // State to manage the timeline entries locally
    const [interactions, setInteractions] = useState([
        { id: 1, type: 'Text', person: 'Arif Rahman', title: 'Asked for career advice', date: 'Jan 23, 2026' },
        { id: 2, type: 'Meetup', person: 'Arif Rahman', title: 'Industry conference meetup', date: 'Jan 28, 2026' },
        { id: 3, type: 'Call', person: 'Tahmid Ishtiak', title: 'Asked for a tour', date: 'Feb 28, 2026' },
    ]);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const res = await fetch("/data/friendsData.json");
            const data = await res.json();
            setFriends(data);
            setIsLoading(false);
        };
        loadData();
    }, []);


    return (
        <AppContext.Provider value={{ friends, interactions, setInteractions, isLoading }}>
            {children}
        </AppContext.Provider>
    );
};