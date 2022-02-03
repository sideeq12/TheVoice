import React from 'react';
import { Card, Form, Input, LargeCard, Nav, Sign } from '../signUp/signUpstyle';
import SIgnicon from "../register.svg"

export const Verify = ()=>{
    return(
        <Sign>
            <Nav>
                <span>TheVoice</span>
                <Card>Don't hve an account ?</Card>
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
                    <button>Verify</button>
                </Form>
            </LargeCard>
        </Sign>
    )
}