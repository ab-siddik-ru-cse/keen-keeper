"use client"
import React, { useContext } from 'react';
import FriendCard from './FriendCard';
import { AppContext } from '@/app/context/AppContext';
import Loading from './Loading';

const FriendsList = () => {
    const { friends, isLoading } = useContext(AppContext);
    return (
        <section className='bg-[#F8FAFC]'>
            <div className="max-w-7xl mx-auto py-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-8">Your Friends</h2>

                {/* Responsive tailwind css style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {isLoading ? (

                        [1, 2, 3, 4, 5].map((i) => <Loading key={i} />)
                    ) : friends.length > 0 ? (

                        friends.map((friend) => (
                            <FriendCard key={friend.id} friend={friend} />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No friends found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FriendsList;