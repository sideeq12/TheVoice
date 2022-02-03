import styled from "styled-components";
import bg from "./fine.svg"


export const Welcome = styled.div`
   /* background-color: #081c15a1; */
   background-image: url(${bg});
    /* background : #2D6A4F; */
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color : #fff;
    height: 100vh;
    font-size: 52px;
    flex-direction: column;
    overflow: hidden;
    img{
        z-index: -1;
        height: 100vh;
        width: 100vw;
        top: 0;
        
    }
    div{
        display: flex;
        align-items: center;
        height: fit-content;
        h4{
            margin-bottom: -15px;
        }
        img{
            width: 100px;
            z-index: 0;
            height: fit-content;
            margin-right: -35px;
        }
        @media (max-width : 940px){
            h4{
            font-size: 18px;
        }
           img{
               width: 50px;
               margin-right: -20px;
           } 
        }
    }
`

export const Pgraph = styled.p`
    width: 50%;
    align-self: center;
    text-align: center;
    color: white;
    font-size: small;
    margin-top: -125vh;
    animation: run 6s;
    @keyframes run {
        0%{
            margin-top: -125vh;
            opacity: 0.1;
        }
        10%{
            margin-top: -30vh;
            opacity: 0.3;
        }
        40%,60%{
            margin-top: 0vh;
            opacity: 1;
        }
        90%{
            Margin-top: -30vh;
            opacity: 0.3;
        }
        100%{
            margin-top: -125vh;
            opacity: 0.1;
        }

    }

    @media (max-width) {
        width: 70%;
    }

`