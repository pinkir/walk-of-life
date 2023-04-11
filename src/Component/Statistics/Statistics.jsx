import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const marks = [
        {
            id: 1,
            name: "assignment-1",
            mark: 60
        },
        {
            id: 2,
            name: "assignment-2",
            mark: 60
        },
        {
            id: 3,
            name: "assignment-3",
            mark: 60
        },
        {
            id: 4,
            name: "assignment-4",
            mark: 60
        },
        {
            id: 5,
            name: "assignment-5",
            mark: 58
        },
        {
            id: 6,
            name: "assignment-6",
            mark: 57
        },
        {
            id: 7,
            name: "assignment-7",
            mark: 60
        },
        {
            id: 8,
            name: "assignment-8",
            mark: 60
        }
    ]



    return (
        <div className='text-center'>
            <h2 className='text-4xl text-center font-bold relative -top-28'>Statistics</h2>
            <AreaChart
                width={1000}
                height={200}
                data={marks}
                margin={{
                    top: 10,
                    right: 30,
                    left: 30,
                    bottom: 0,
                }}>
                <Area dataKey="mark" stroke="blue"></Area>
                <XAxis dataKey="name" stroke="purple"></XAxis>
                <YAxis stroke="purple"></YAxis>
                <Tooltip></Tooltip>
                
            </AreaChart>
        </div>
    );
};

export default Statistics;