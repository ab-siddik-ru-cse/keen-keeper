import React from 'react';
import FriendCard from './FriendCard';

const FriendsList = ({ friends }) => {

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 px-2">Your Friends</h2>

            {/* 4-column grid on large screens, 3 on tablets, 1 on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {friends.map((friend) => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        </section>
    );
};

export default FriendsList;