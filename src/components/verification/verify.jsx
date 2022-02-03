import React from 'react';
import { Card, Form, Input, LargeCard, Nav, Sign } from '../signUp/signUpstyle';
import SIgnicon from "../register.svg"
import logo from "../Microphone.svg"
import { useNavigate } from 'react-router-dom';

export const Verify = ()=>{
    const navigate = useNavigate()
    return(
        <Sign>
            <Nav>
            <span><img src={logo} alt='TheVoice logo' />
                <h3>TheVoice</h3></span>
                <Card href='/'>Don't hve an account ?</Card>
            </Nav>
            <LargeCard>
                <img src={SIgnicon} alt='verification image' />
                <Form>
                    <h2>Verify Email </h2>
                    <label>Please enter 6-digit sent to your email address</label>
                    <Input>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    </Input>
                    <button onClick={()=> navigate("/dashboard")}>Verify</button>
                </Form>
            </LargeCard>
        </Sign>
    )
}