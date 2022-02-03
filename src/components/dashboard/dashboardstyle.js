import styled from "styled-components";

export const Layer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const Menu = styled.div`
    background: #2D6A4F;
    width: 254px;
    height: 100vh;
    padding-top: 50px;
    span{
        color: white;
        display: flex;
        gap: 1rem;
        align-items: center;
        padding-left: 38px;
        label{
            margin-top: -15px;
            img{
            width: 30px;
            margin-bottom: -10px;
            margin-right: -10px;
        }
        }
    }
    a{
        color: white;
        text-decoration: none;
    }
    
    @media (max-width : 940px) {
        width: 100vw;
        position: fixed;
        bottom: 0;
        height: fit-content;
        padding-top: 0px;
        margin-bottom: ${(props)=> props.stat ? "-185px" : "0px"};
        transition: .5s;
        span{
            svg{
            display: none;
        }
        }
    }
    span{
        margin-bottom: 20px;
        margin-top: 20px;
        
    }
`
export const Icon = styled.div`
    display: none;

    @media (max-width : 940px){
        display: block;
        border: 1px solid red;
        position:fixed;
        right: 0;
        bottom: 0;
        margin-right: 10vw;
        margin-bottom: 15px;
    }
`
export const MenuLink = styled.ul`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width : 254px;
    align-items : left;

    li{
        text-align: left;
        color: white;
        list-style: none;
        display: flex;
        padding-left: 30px;
        width: 90%;
        margin-left: -30px;
        label{
            margin-left: 10px;
            margin-top: -2px;
        }
    }
    li:hover{
        width: 80%;
        padding  : 10px 0px 10px 20px;
        transition: .1s;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 5px 2px 5px black;
    }

    @media (max-width : 940px) {
        flex-direction: row;
        margin-top: 0px;
        height: fit-content;
        width: 100vw;
        flex-wrap: wrap;


        li{
            font-size: small;
            width: 30vw;
            display: flex;
            flex-direction: column;
            padding-left: 0px;
        }
        li a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap : 0.3rem
        }
        li:hover{
            width : 30vw;
            padding : 0px
        }
    }
    
`