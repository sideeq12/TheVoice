import React from 'react';
import { Pgraph, Welcome } from "./homestyle"
import micro from "./Microphone.svg"

export const Home = ()=>{
    return(
        <Welcome> 
            <div><img src={micro} alt="" /><h4>TheVoice</h4></div>
            <Pgraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore
                 magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Pgraph>
        </Welcome>
    )
}