"use client";
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { AppContext } from '../context/AppContext';

const FriendshipAnalytics = () => {

    const { interactions } = useContext(AppContext);
    const valueCount = (type) => {
        const typeValue = interactions.filter(i => i.type === type);
        return typeValue.length;
    }

    const data = [
        { name: 'Call', value: valueCount('Call'), color: '#2D4F3C' },
        { name: 'Text', value: valueCount('Text'), color: '#8B31FF' },
        { name: 'Video', value: valueCount('Video'), color: '#3BA755' },
    ];

    return (
        <div className='bg-[#f8fafc]'>
            <div className="max-w-7xl mx-auto p-6 my-10">
                <h1 className="text-3xl font-bold text-[#1e293b] mb-6">Friendship Analytics</h1>

                {/* Chart Container Card */}
                <div className="bg-white p-10 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-[#2D4F3C] font-semibold mb-4">By Interaction Type</p>

                    <div className="h-75 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={75}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} cornerRadius={10} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend
                                    iconType="circle"
                                    verticalAlign="bottom"
                                    align="center"
                                    wrapperStyle={{ paddingTop: "20px" }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendshipAnalytics;