import styled from "styled-components";
import makinde from "./makinde.jpg"

export const Layer = styled.div`
    display: flex;
    height: 100vh;
    overflow-y: hidden;
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
    height: 100vh;
    overflow-y: scroll;
    padding-left: 30px;
    padding-bottom: 30px;
`
export const UpperLayer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap : 2rem;
`
export const Tsearch = styled.div`
    background: white;
    border: 1px solid rgba(0, 128, 0, 0.541);
    border-radius: 5px;
    display: flex;
    width :300px;
    padding: 5px 10px;
    margin-bottom: 40px;
    gap : 1rem;
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
    width: 62%;
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
    text-align: left;
    color : #081C15;
    margin-top: -40px; 
    width: 28%;
    h4{
        font-size: 15px;
    }
    label{
        color : rgba(0, 0, 0, 0.455);
        font-size: small;
    }
    div{
        border : none;
        box-shadow: -2px 2px 6px 0px rgba(0,0,0,0.75);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        padding : 10px;

        p{
            margin-top: 10px;
            progress[value]::-webkit-progress-value {
                color : green;
                background: green;
}
        }
    }
`

export const Downlist = styled.div`
    width : 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* align-items: flex-start; */
    gap: 1.5rem;
    margin-bottom: 50px;
`
export const Active = styled.div`
    width : 68%;
    padding-right: 10px;
    height: 325px;
    overflow-y: scroll;
    overflow-x: hidden;
    

    span{
        display: flex;
        justify-content: space-between;
        padding: 5px 10px;
        margin-bottom: 15px;
    }
  
    div{
        padding-left: 5px;
        display: flex;
        gap: 1rem;
        div{
        width : 42%;
        flex-direction: column;
        height: fit-content;
        padding : 15px;
        box-shadow: -2px 2px 6px 0px rgba(0,0,0,0.75);
        border-radius: 5px;
        label{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-right: 10px;
            p{
                font-size: small;
                h4{
                    margin-left: -45px;
                    margin-top: 0px;
                }
            }
            svg{
                margin-top: 15px;
            }
        }
        span{
            padding: 0px;
        }
    }
   
    }
`
export const Previous = styled.div`
    width: 25%;
    /* border : 1px solid black; */
    /* box-shadow: -2px 2px 6px 0px rgba(0,0,0,0.75); */
    border-radius: 4px;
`
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    li{
        list-style: none;
        width : 110%;
        margin-left: -30px;
        display: flex;
        gap: 1rem;
        height: 80px;
        font-size: small;

        img{
            height: 75px;
            width: 75px;
            border-radius: 50%;
        }
    }
`
export const Desc = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    text-align: left;
    span{
        color : green;
        margin: 2px;
    }
    label{
        font-size: smaller;
        color : rgba(0, 0, 0, 0.555);
    }
    progress {
        /* display: n; */
  border-radius: 7px; 
  width: 80%;
  height: 5px;
  /* margin-left: -11.5%; */
  /* background-color: green; */
  color : green;
  box-shadow: 1px 1px 4px rgba( 0, 0, 0, 0.2 );
}
progress::-webkit-progress-bar {
  background-color: green;
  color : green;
  border-radius: 7px;
}
progress::-webkit-progress-value {
  background-color: green;
  color : green;
  border-radius: 7px;
  box-shadow: 1px 1px 5px 3px rgba( 255, 0, 0, 0.8 );
}
    `

export const HeadCard = styled.div`
    padding: 10px;
    margin-top: -20px;
    display: flex;
    width: 100%;
    

    section{
        display: flex;
        flex-direction: column;
        margin-top: 75px;
        align-items: center;
        padding-bottom: 20px;
        width : 35%;
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.98);
        height: 200px;
        border-radius: 5px;
        gap: 0.5rem;

        div{
        margin-top: -50px;
        border-radius: 100%;
        height: 75px;
        width: 75px;
        margin-bottom: 15px;
        padding: 5px;
        /* opacity: 0.7; */
        border: 1.23403px solid #D6D5D5;
        img{
            height: 100%;
            width: 100%;
            border-radius: 100%; 
        }
        }
    }
    label{
        margin-top: -30px;
        margin-bottom: 10px;
        font-size: small;
        color : #9C9C9C;

    }
    h4{
        margin-top: -1px;
    }
   
     a{
         color : #52B788;
         text-decoration: none;
     }
     progress{
         color : green;
         margin-top: -35px;
         margin-bottom: 5px;
     }
     span{
         font-size: 15px;
     }
`