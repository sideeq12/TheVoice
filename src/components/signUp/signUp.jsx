import React from 'react';
import { useNavigate } from 'react-router-dom';
import SIgnicon from "../register.svg"
import { Card, Form, LargeCard, Nav, Sign } from './signUpstyle';
import logo from "../Microphone.svg"

export const SignUp = ()=>{
    const navigate = useNavigate()
    return(
       <Sign>
            <Nav>
            <span><img src={logo} alt='TheVoice logo' />
                <h3>TheVoice</h3></span>
                <Card href='login'>
                    Already have an account
                </Card>
            </Nav>
            <LargeCard>
                <img src={SIgnicon} alt='image section' />
                <Form>
                    <h2>Register for free</h2>
                    <label>Full name :</label>
                    <input type="text" required/>
                    <label>Email:</label>
                    <input type="email" required/>
                    <label>National ID:</label>
                    <input type="text" required/>
                    <label>Password:</label>
                    <input type="password" required/>
                    <label>Confirm password :</label>
                    <input type="password" />
                    <button type='submit' onClick={()=>navigate("/verify")}>Register</button>
                </Form>
            </LargeCard>
       </Sign>
    )
}