"use client";
import React, { useContext, useState } from 'react';
import {
    Phone, MessageSquare, Video, History, Search, ArrowUpDown
} from 'lucide-react';
import { AppContext } from '../context/AppContext';

const Timeline = () => {
    const { interactions } = useContext(AppContext);

    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("All");
    const [sortOrder, setSortOrder] = useState("newest");

    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <Phone size={18} />;
            case 'Text': return <MessageSquare size={18} />;
            case 'Video': return <Video size={18} />;
            default: return <History size={18} />;
        }
    };

    const processedInteractions = interactions
        .filter((item) => {
            // Search 
            const matchesSearch =
                item.person.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.type.toLowerCase().includes(searchTerm.toLowerCase());

            // Filter 
            const matchesFilter = filterType === "All" || item.type === filterType;

            return matchesSearch && matchesFilter;
        })
        .sort((a, b) => {
            // Sort 
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        });

    return (
        <div className='bg-[#f8fafc]'>
            <div className="max-w-7xl mx-auto py-6 px-4 min-h-screen">
                <h1 className="text-3xl font-bold text-[#1e293b] mb-6">Timeline</h1>

                {/* Upper Section */}
                <div className="mb-8 flex flex-wrap gap-4 items-center">

                    <div className="relative w-full max-w-xs">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search size={18} className="text-gray-400" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search name or type..."
                            className="input input-bordered border w-full pl-5 bg-white focus:border-emerald-900 focus:outline-none focus:ring-0 focus:ring-gray-200"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <select
                        className="select select-bordered w-full max-w-[150px] bg-white focus:border-emerald-900 focus:outline-none focus:ring-0 focus:ring-gray-200"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="All">All Types</option>
                        <option value="Call">Call</option>
                        <option value="Text">Text</option>
                        <option value="Video">Video</option>
                    </select>

                    <div className="flex items-center gap-2">
                        <ArrowUpDown size={18} className="text-gray-500" />
                        <select
                            className="select select-bordered w-full max-w-[150px] bg-white focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-200"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>
                </div>

                {/* Timeline List */}
                <div className="space-y-4">
                    {processedInteractions.length > 0 ? (
                        processedInteractions.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 bg-white p-4 rounded-sm shadow-sm hover:shadow-md transition-all cursor-default border border-transparent hover:border-gray-200"
                            >
                                <div className="p-4 rounded-full text-2xl bg-gray-100 text-gray-600">
                                    {getIcon(item.type)}
                                </div>

                                <div>
                                    <p className="text-[16px] text-gray-500">
                                        <span className="text-[18px] font-bold text-emerald-900">{item.type}</span> with {item.person}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {new Date(item.date).toLocaleDateString('en-US', {
                                            year: 'numeric', month: 'long', day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10 text-gray-400">
                            No interactions found matching your criteria.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;