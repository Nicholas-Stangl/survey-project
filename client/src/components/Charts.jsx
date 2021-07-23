import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import axios from 'axios'




const Charts = () => {
    // Have not uesed allAnswers yet
    const [allAnswers, setAllAnswers] = useState([])

    const [aveTimeRating, setAveTimeRating] = useState()
    const [numOne, setNumOne] = useState()

    const [aveExplRating, setAveExplRating] = useState()
    const [numTwo, setNumTwo] = useState()

    const [aveQualRating, setAveQualRating] = useState()
    const [numThree, setNumThree] = useState()


    useEffect(() => {
        axios.get("http://localhost:8000/api/things")
            .then(res => {
                console.log('*************')
                console.log(res)
                console.log('*************')
                setAllAnswers(res.data.results)

                // ================================
                // Average waitTime Rating Component
                // ================================
                setAveTimeRating(() => {
                    let sum = 0;
                    let arr = res.data.results;
                    for (let x = 0; x < arr.length; x++) {
                        sum += arr[x].waitTime;
                    }
                    return ((sum / arr.length).toFixed(2))
                })
                setNumOne(() => {
                    let sum = 0;
                    let arr = res.data.results;
                    for (let x = 0; x < arr.length; x++) {
                        sum += arr[x].waitTime;
                    }
                    let num = Math.round(sum / arr.length)
                    let newArr = [];
                    for (let i = num; i > 0; i--) {
                        newArr.push(i)
                    }
                    return newArr.length;
                })

                // ================================
                // Average explanation Rating Component
                // ================================
                setAveExplRating(() => {
                    let sum = 0;
                    let arr = res.data.results;
                    for (let x = 0; x < arr.length; x++) {
                        sum += arr[x].explanation;
                    }
                    return ((sum / arr.length).toFixed(2))
                })
                setNumTwo(() => {
                    let sum = 0;
                    let arr = res.data.results;
                    for (let x = 0; x < arr.length; x++) {
                        sum += arr[x].explanation;
                    }
                    let num = Math.round(sum / arr.length)
                    let newArr = [];
                    for (let i = num; i > 0; i--) {
                        newArr.push(i)
                    }
                    return newArr.length;
                })

                // ================================
                // Average workQuality Rating Component
                // ================================
                setAveQualRating(() => {
                    let sum = 0;
                    let arr = res.data.results;
                    for (let x = 0; x < arr.length; x++) {
                        sum += arr[x].workQuality;
                    }
                    return ((sum / arr.length).toFixed(2))
                })
                setNumThree(() => {
                    let sum = 0;
                    let arr = res.data.results;
                    for (let x = 0; x < arr.length; x++) {
                        sum += arr[x].workQuality;
                    }
                    let num = Math.round(sum / arr.length)
                    let newArr = [];
                    for (let i = num; i > 0; i--) {
                        newArr.push(i)
                    }
                    return newArr.length;
                })


            })
            .catch(err => console.log(err))
    }, []);


    return (
        <div className="container">
            <br />
            <br />
            <h1>Patient Survey Results</h1>

            <br />
            <div className="border border-dark">
                <p>{`Average Wait Time Rating: ${aveTimeRating}`} </p>
                {[...Array(numOne)].map(star => {
                    return <FaStar style={{ color: "orange" }} size={25} />
                })}
                <br />
                <br />
            </div>

            <br />
            <br />
            <div className="border border-dark">
                <p>{`Average Rating for Procedure Explanation: ${aveExplRating}`} </p>
                {[...Array(numTwo)].map(star => {
                    return <FaStar style={{ color: "orange" }} size={25} />
                })}
                <br />
                <br />
            </div>

            <br />
            <br />
            <div className="border border-dark">
                <p>{`Average Satisfaction with Procedure: ${aveQualRating}`} </p>
                {[...Array(numThree)].map(star => {
                    return <FaStar style={{ color: "orange" }} size={25} />
                })}
                <br />
                <br />
            </div>

        </div>
    );
};

export default Charts;