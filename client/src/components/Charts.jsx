import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


const Charts = () => {

    const data = [
        {
            name: "Question 1",
            response1: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Question 2",
            response1: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Question 3",
            response1: 2000,
            pv: 9800,
            amt: 2290
        },

    ];



    return (
        <div className="container">
            <h1>Charts Here!</h1>
            <div class="d-inline-flex p-2">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="response1" stackId="a" fill="#82ca9d" />
            </BarChart>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="response1" stackId="a" fill="#82ca9d" />
            </BarChart>
            </div>
        </div>
    );
};

export default Charts;