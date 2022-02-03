import styled from "styled-components";

export const Layer = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
`
export const SmallMenu = styled.div`
      display: none;
      @media (max-width : 940px) {
        margin-top: 15px;
        color: white;
        display: ${(props)=> props.stat ? "none" : "flex"};
        position: fixed;
        top: 0;
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
        top: 0;
        flex-direction: row-reverse;
        height: fit-content;
        padding-top: 15px;
        padding-bottom: ${(props)=> props.stat ? "0px" : "70px"};
        margin-top: ${(props)=> props.stat ? "0px" : "-200px"};
        transition: .5s;
        span{
           display: none;
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
        position:fixed;
        right: 0;
        top: 0;
        margin-right: ${(props)=> props.stat ? "20vw" : "10vw"};
        transition: none.5s;
        margin-top: ${(props)=> props.stat ? "150px" : "20px"};
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
            gap : 0.3rem;
        }
        li:hover{
            width : 30vw;
            padding : 0px
        }
    }
    
`

export const Details = styled.div`
    padding-top: 50px;
    width: 80vw;
    background-color: orange;
    padding-left: 30px;
`
export const UpperLayer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap : 1rem;
`
export const Tsearch = styled.div`
    background: white;
    border: 2px solid green;
    border-radius: 5px;
    display: flex;
    width :300px;
    padding: 5px 10px;
    margin-bottom: 40px;
    input{
        border : none;
        width : 350px;
    }

    @media (max-width : 940px) {
        margin-bottom: 10px;
        width: 300px;
        padding: 5ps 15px;
        font-size: small;
    }
`

export const Jumbotron = styled.div`
    width: 65%;
    background-color: #D8F3DC;
    border-radius: 15px;
    display: flex;
    padding: 0px 20px;
    height: 190px;
    img{
        width : 45%;
    }
    
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width : 45%;
        font-size: small;

        p{
            text-align: center;
        }
        button{
            background-color : #2D6A4F;
            padding : 10px 0px;
            width : 80%;
            border : none;
            border-radius: 10px;
            font-size: small;
            color : white;
        }
    }
    @media (max-width : 940px){
        width : 100%;
    }
`
export const Latest = styled.div`
    background: white;
    border-radius: ;
`
