"use client";
import React, { useContext } from 'react';
import {
    Phone, MessageSquare, Video, History
} from 'lucide-react';
import { AppContext } from '../context/AppContext';

const Timeline = () => {
    const { interactions } = useContext(AppContext);
    console.log(interactions);

    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <Phone size={18} />;
            case 'Text': return <MessageSquare size={18} />;
            case 'Video': return <Video size={18} />;
            default: return <History size={18} />;
        }
    };


    return (
        <div className='bg-[#f8fafc]'>
            <div className="max-w-7xl mx-auto p-6 min-h-screen">
                <h1 className="text-3xl font-bold text-[#1e293b] mb-6">Timeline</h1>

                {/* Filter Dropdown */}
                <div className="mb-8">
                    <select className="select select-bordered w-full max-w-xs bg-white">
                        <option disabled selected>Filter timeline</option>
                        <option>Calls</option>
                        <option>Videos</option>
                        <option>Meetups</option>
                    </select>
                </div>

                {/* Timeline List Mapping */}
                <div className="space-y-4">
                    {interactions.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-4 bg-white p-4 rounded-sm shadow-sm hover:shadow-md transition-shadow cursor-default"
                        >
                            {/* Icon Section */}
                            <div className={`p-4 rounded-full text-2xl bg-gray-100`}>
                                {getIcon(item.type)}
                            </div>

                            {/* Text Content */}
                            <div>
                                <p className="text-[16px] text-gray-500">
                                    <span className="text-[18px] font-bold text-emerald-900">{item.type}</span> with {item.person}
                                </p>
                                <p className="text-sm text-gray-500">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;