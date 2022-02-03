
import React from 'react';
import { Card, Form , LargeCard, Nav, Sign} from '../signUp/signUpstyle';
import SIgnicon from "../login.svg"
import logo from "../Microphone.svg"
import { useNavigate } from 'react-router-dom';


export const Login = ()=>{
    const navigate = useNavigate()
    return(
        <Sign>
            <Nav>
            <span><img src={logo} alt='TheVoice logo' />
                <h3>TheVoice</h3></span>
                <Card href='/'>Create an account</Card>
            </Nav>
            <LargeCard>
            <img src={SIgnicon} alt='login THeVoice image' />
            <Form>
                <h2>Login</h2>
                <label>Email :</label>
                <input type="email" required />
                <label>Password :</label>
                <input type="password" required />
                <button onClick={()=>navigate("/dashboard")}>Login</button>
                <a href='/verifyemail'>Forgot password?</a>
            </Form>
            </LargeCard>
        </Sign>
    )
}