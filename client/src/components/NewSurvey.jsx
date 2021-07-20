
import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewSurvey = () => {

    const [formInfo, setFormInfo] = useState({
        waitTime:"",
        explanation:"",
        workQuality:""
    
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
            <br/>
            <br/>

            <p>Please select the level to which you agree with the following statements,</p>
            <p>with 5 equal to “Strongly Agree”, and 0 equal to “Strongly Disagree”. </p>
            <form className="col-4 mx-auto"  onSubmit={submitHandler}>
                <br/>
                <div className="form-group">
                    <label htmlFor="">Time spent in the waiting room was not excessive.</label>

                    <p style={{color:"red"}}>{errors.waitTime? errors.waitTime.message: ""}</p>
                    <select class="form-control" id="" name="waitTime" onChange={changeHandler}>
                        <option></option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <br/>
                <div className="form-group">
                    <label htmlFor="">Elements of my procedure were explained clearly.</label>

                    <p style={{color:"red"}}>{errors.explanation? errors.explanation.message: ""}</p>
                    <select class="form-control" id="" name="explanation" onChange={changeHandler}>
                        <option></option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>


                <br/>
                <div className="form-group">
                    <label htmlFor="">My dental work was completed to my satisfaction.</label>


                    <p style={{color:"red"}}>{errors.workQuality? errors.workQuality.message: ""}</p>
                    <select class="form-control" id="" name="workQuality" onChange={changeHandler}>
                        <option></option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
};


export default NewSurvey;