import styled from "styled-components"

export const Flex = styled.div`

    display: flex;
    align-items: center;

  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%; 
  overflow: hidden;

    video{
        min-width: 100%; 
  min-height: 100%; 
  width: auto;
  height: auto;

    }
    div {
        position: absolute;
        top: 20%;
        left: 15%;

        h1{
            color: #fff;
            font-size: 5rem;
            font-family: 'Roboto', sans-serif;
        }
        p{  
            color: #fff;
            font-size: 2rem;
            font-family: 'Roboto', sans-serif;
        }

    }
    @media (max-width: 1980px) {
        width: 100%;
        left:0;
       
  }

`