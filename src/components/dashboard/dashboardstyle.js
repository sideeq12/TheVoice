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
        padding-left: 28px;
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
        height: 10vh;
        padding-top: 0px;
    }
`

export const MenuLink = styled.ul`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width : 254px;
    align-items : left;

    li{
        text-align: left;
        color: white;
        list-style: none;
        display: flex;
        padding-left: 20px;
        width: 90%;
        margin-left: -30px;
        label{
            margin-left: 10px;
            margin-top: -2px;
        }
    }
    li:hover{
        width: 80%;
        padding-left: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        transition: .1s;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: 5px 2px 5px black;
    }

    @media (max-width : 940px) {
        flex-direction: row;
        margin-top: 0px;
        width: 100vh;
    }
    
`