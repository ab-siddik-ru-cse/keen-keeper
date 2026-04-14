"use client";
import React, { useContext } from 'react';
import { HiOutlinePhone, HiOutlineVideoCamera, HiOutlineChatAlt2, HiOutlineUsers } from "react-icons/hi";
import { AppContext } from '../context/AppContext';

const Timeline = () => {
    const { interactions } = useContext(AppContext);
    console.log(interactions);

    // 1. Dummy Data Array
    const timelineData = [
        { id: 1, type: "Meetup", person: "Tom Baker", date: "March 29, 2026", icon: <HiOutlineUsers />, color: "bg-orange-100 text-orange-600" },
        { id: 2, type: "Text", person: "Sarah Chen", date: "March 28, 2026", icon: <HiOutlineChatAlt2 />, color: "bg-gray-100 text-gray-600" },
        { id: 3, type: "Meetup", person: "Olivia Martinez", date: "March 26, 2026", icon: <HiOutlineUsers />, color: "bg-orange-100 text-orange-600" },
        { id: 4, type: "Video", person: "Aisha Patel", date: "March 23, 2026", icon: <HiOutlineVideoCamera />, color: "bg-blue-100 text-blue-600" },
        { id: 5, type: "Meetup", person: "Sarah Chen", date: "March 21, 2026", icon: <HiOutlineUsers />, color: "bg-orange-100 text-orange-600" },
        { id: 6, type: "Call", person: "Marcus Johnson", date: "March 19, 2026", icon: <HiOutlinePhone />, color: "bg-green-100 text-green-600" },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 bg-[#f8fafc] min-h-screen">
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
                        className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-default"
                    >
                        {/* Icon Section */}
                        <div className={`p-3 rounded-lg text-2xl ${item.color}`}>
                            {item.icon}
                        </div>

                        {/* Text Content */}
                        <div>
                            <p className="text-lg font-medium text-gray-800">
                                <span className="font-bold">{item.title}</span>
                            </p>
                            <p className="text-sm text-gray-500 font-semibold">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;