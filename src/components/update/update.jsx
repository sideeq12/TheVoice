
import React from 'react';
import { Card, Form , LargeCard, Nav, Sign} from '../signUp/signUpstyle';
import SIgnicon from "../sign.svg"


export const Update = ()=>{
    return(
        <Sign>
            <Nav>
                <span>Logo</span>
                <Card>Create an account</Card>
            </Nav>
            <LargeCard>
            <img src={SIgnicon} alt='login THeVoice image' />
            <Form>
                <h2>Create new password</h2>
                <label>Password :</label>
                <input type="password" required />
                <label>Password :</label>
                <input type="password" required />
                <button>Update</button>
                <a href='#'>Forgot password?</a>
            </Form>
            </LargeCard>
        </Sign>
    )
}