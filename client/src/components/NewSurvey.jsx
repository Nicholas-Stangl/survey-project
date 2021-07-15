
import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewSurvey = () => {

    const [formInfo, setFormInfo] = useState({
        howLong:"",
        whereHear:"",
        whatBrought:""
    
    })

    const [errors, setErrors] = useState ({})

    const changeHandler = (e) =>{
        console.log("********CHANGING********")
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("getting ready to submit", formInfo)
        axios.post('http://localhost:8000/api/things/create', formInfo)
            .then(res=>{
                console.log('***********')
                console.log(res)
                if(res.data.results){
                    navigate("/thanks")
                }
                else{
                    setErrors(res.data.errors)
                }

            })
            .catch(err=> console.log (err))
    }



    return (
        <div>
            <form className="col-4 mx-auto"  onSubmit={submitHandler}>
                <br/>
                <div className="form-group">
                    <label htmlFor="">How long have you been a patient at our offices?</label>
                    <p style={{color:"red"}}>{errors.howLong? errors.howLong.message: ""}</p>
                    <select class="form-control" id="" name="howLong" onChange={changeHandler}>
                        <option></option>
                        <option>I'm new to the practice</option>
                        <option>Less than a year</option>
                        <option>Over a year, under two</option>
                        <option>Over two years, under five</option>
                        <option>Over five years, under ten</option>
                        <option>Ten years or more</option>
                    </select>
                </div>

                <br/>
                <div className="form-group">
                    <label htmlFor="">Where did you learn about our practice?</label>
                    <p style={{color:"red"}}>{errors.whereHear? errors.whereHear.message: ""}</p>
                    <select class="form-control" id="" name="whereHear" onChange={changeHandler}>
                        <option></option>
                        <option>Advertisement</option>
                        <option>Recommendation</option>
                        <option>Insurance Provider</option>
                        <option>Research</option>
                        <option>Other</option>
                    </select>
                </div>


                <br/>
                <div className="form-group">
                    <label htmlFor="">What brought you in for your latest visit?</label>
                    <p style={{color:"red"}}>{errors.whatBrought? errors.whatBrought.message: ""}</p>
                    <select class="form-control" id="" name="whatBrought" onChange={changeHandler}>
                        <option></option>
                        <option>Annual Cleaning</option>
                        <option>Dental Work</option>
                        <option>Emergency Dental Work</option>
                        <option>Molds for Braces/Mouth Guard</option>
                        <option>Other</option>
                    </select>
                </div>
                
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
};


export default NewSurvey;