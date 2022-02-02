import styled from "styled-components";

export const Sign = styled.div`
    padding: 50px 100px;
    height: 100vh;

    @media (max-width : 940px) {
        padding: 30px 20px;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Card = styled.div`
    background-color: #D8F3DC;
    border-radius: 8px;
    color: green;
    padding: 15px 30px;
    font-size: small;
`
export const Input = styled.div`
    input{
        background: #D8F3DC;
        width: 30px;
        border-radius: 2px;
        border : 1px sold #D8F3DC;
        color : green;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 35%;
    gap: 0.5rem;

    div{
        display: flex;
        gap: 1rem;
        margin: 10px;
    }
    

    @media (max-width: 940px){
        width: 80%;
    }

    input{
        height: 35px;
        border-radius: 4px;
        border: 1px solid black;
    }

    button{
        color: white;
        background: #2D6A4F;
        border: none;
        border-radius: 4px;
        padding: 5px 0px;
    }
    button:hover{
        color : #d8f3dc;
        cursor: pointer;
    }
    h2{
        color: #2D6A4F;
    }
`
export const LargeCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5rem;
    align-items: center;

    a{
        align-self: center;
        margin-top: 10px;
        color: #2D6A4F;
    }

    img{
        width :40%;
        margin-right: 30px;
    }

    @media (max-width: 940px){
        justify-content: center;
        padding-top: 20px;
        img{
            display: none;
        }

    }
`