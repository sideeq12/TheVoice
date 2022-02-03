
import React from 'react';
import { Card, Form , LargeCard, Nav, Sign} from '../signUp/signUpstyle';
import SIgnicon from "../login.svg"
import logo from "../Microphone.svg"
import { useNavigate } from 'react-router-dom';


export const Update = ()=>{
    const navigate = useNavigate()
    return(
        <Sign>
            <Nav>
                
                <span><img src={logo} alt='TheVoice logo' />
                <h3>TheVoice</h3></span>
                <Card href='/login'>Sign in to your account</Card>
            </Nav>
            <LargeCard>
            <img src={SIgnicon} alt='login THeVoice image' />
            <Form>
                <h2>Create new password</h2>
                <label>Password :</label>
                <input type="password" required />
                <label>Password :</label>
                <input type="password" required />
                <button onClick={()=> navigate("/dashboard")}>Update</button>
                <a href='/login'>Forgot password?</a>
            </Form>
            </LargeCard>
        </Sign>
    )
}