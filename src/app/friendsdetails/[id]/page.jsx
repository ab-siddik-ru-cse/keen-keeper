"use client";
import React, { use, useContext, useState } from 'react';
import {
    Phone, MessageSquare, Video, Clock,
    Archive, Trash2, Edit3, History
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { AppContext } from '@/app/context/AppContext';

const FriendDetails = ({ params }) => {
    const { friends, interactions, setInteractions } = useContext(AppContext);
    const p = use(params);
    if (!friends) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Friend Loading....</p>
            </div>
        );
    }

    const friend = friends.find(f => f.id === parseInt(p.id));

    if (!friend) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Friend data not found. Please go back to home or wait...</p>
            </div>
        );
    }

    const icons = {
        Call: <Phone size={16} />,
        Text: <MessageSquare size={16} />,
        Video: <Video size={16} />,
    };

    const handleCheckIn = (type) => {
        const newEntry = {
            id: Date.now(),
            type: type,
            title: `${type} with ${friend.name}`,
            date: new Date().toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric'
            }),
        };

        setInteractions([newEntry, ...interactions]);
        toast.success(`${type} entry added!`, {
            icon: icons[type],
            style: { background: '#1a4332', color: '#fff' },
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 bg-white">
            <Toaster position="top-right" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* --- LEFT COLUMN (4 Cols) --- */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                        <img
                            src={friend.picture}
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-50 object-cover"
                            alt={friend.name}
                        />
                        <h1 className="text-2xl font-bold text-slate-800">{friend.name}</h1>
                        <div className="flex justify-center gap-2 mt-3">
                            <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Overdue</span>
                            <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase">Family</span>
                        </div>
                        <p className="italic text-slate-500 mt-4 text-sm">"{friend.bio}"</p>
                        <p className="text-xs text-slate-400 mt-2">Preferred: {friend.email}</p>
                    </div>

                    <div className="space-y-3">
                        <button className="btn btn-block bg-white hover:bg-gray-50 text-slate-700 border-gray-200 normal-case font-medium">
                            <Clock size={18} /> Snooze 2 Weeks
                        </button>
                        <button className="btn btn-block bg-white hover:bg-gray-50 text-slate-700 border-gray-200 normal-case font-medium">
                            <Archive size={18} /> Archive
                        </button>
                        <button className="btn btn-block bg-white hover:bg-red-50 text-red-500 border-red-100 normal-case font-medium">
                            <Trash2 size={18} /> Delete
                        </button>
                    </div>
                </div>

                {/* --- RIGHT COLUMN (8 Cols) --- */}
                <div className="lg:col-span-8 space-y-6">

                    {/* 1. Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { label: 'Days Since Contact', val: friend.days_since_contact },
                            { label: 'Goal (Days)', val: friend.goal },
                            { label: 'Next Due', val: friend.next_due_date }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 text-center shadow-sm">
                                <div className="text-3xl font-bold text-slate-800">{stat.val}</div>
                                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* 2. Relationship Goal Card */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                        <div>
                            <h3 className="text-slate-800 font-bold">Relationship Goal</h3>
                            <p className="text-sm text-slate-500">Connect every <span className="font-bold text-slate-800">{friend.goal} days</span></p>
                        </div>
                        <button className="btn btn-sm bg-slate-50 border-none text-slate-600 hover:bg-slate-100">
                            <Edit3 size={14} /> Edit
                        </button>
                    </div>

                    {/* 3. Quick Check-In */}
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <h3 className="text-slate-800 font-bold mb-4">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={() => handleCheckIn('Call')} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-50 hover:bg-slate-50 transition-colors">
                                <Phone className="text-slate-700" /> <span className="text-sm">Call</span>
                            </button>
                            <button onClick={() => handleCheckIn('Text')} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-50 hover:bg-slate-50 transition-colors">
                                <MessageSquare className="text-slate-700" /> <span className="text-sm">Text</span>
                            </button>
                            <button onClick={() => handleCheckIn('Video')} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-50 hover:bg-slate-50 transition-colors">
                                <Video className="text-slate-700" /> <span className="text-sm">Video</span>
                            </button>
                        </div>
                    </div>

                    {/* 4. Recent Interactions (Timeline) */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-50 flex justify-between items-center">
                            <h3 className="text-slate-800 font-bold">Recent Interactions</h3>
                            <button className="text-xs flex items-center gap-1 text-slate-500 font-medium">
                                <History size={14} /> Full History
                            </button>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {interactions.map((item) => (
                                <div key={item.id} className="p-6 flex justify-between items-center">
                                    <div className="flex gap-4 items-center">
                                        <div className="p-2 bg-slate-50 rounded-lg text-slate-600">
                                            {item.type === 'Call' && <Phone size={18} />}
                                            {item.type === 'Text' && <MessageSquare size={18} />}
                                            {item.type === 'Video' && <Video size={18} />}
                                            {item.type === 'Meetup' && <History size={18} />}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800 text-sm">{item.type}</p>
                                            <p className="text-xs text-slate-500">{item.title}</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-slate-400">{item.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetails;