import React from 'react';
import SIgnicon from "../sign.svg"
import { Card, Form, LargeCard, Nav, Sign } from './signUpstyle';

export const SignUp = ()=>{
    return(
       <Sign>
            <Nav>
                <span>Logo section</span>
                <Card>
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
                    <button type='submit'>Register</button>
                </Form>
            </LargeCard>
       </Sign>
    )
}