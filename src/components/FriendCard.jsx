import React from 'react';
import Link from 'next/link';

const FriendCard = ({ friend }) => {
    // Logic for Status Badge Colors
    const getStatusStyles = (status) => {
        switch (status.toLowerCase()) {
            case 'overdue':
                return 'bg-red-500 text-white';
            case 'almost due':
                return 'bg-amber-400 text-white';
            case 'on-track':
                return 'bg-emerald-900 text-white';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <Link href={`/friendsdetails/${friend.id}`}>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer h-full">
                {/* Profile Picture */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-100">
                    <img
                        src={friend.picture}
                        alt={friend.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Name & Contact Info */}
                <h3 className="text-xl font-bold text-slate-800">{friend.name}</h3>
                <p className="text-xs text-gray-400 mt-1 mb-3">
                    {friend.days_since_contact}d ago
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {friend.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] uppercase font-bold rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Status Badge */}
                <div className={`mt-auto px-4 py-1 rounded-full text-[10px] font-bold capitalize ${getStatusStyles(friend.status)}`}>
                    {friend.status}
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;