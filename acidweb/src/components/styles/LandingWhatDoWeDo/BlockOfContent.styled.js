import styled from "styled-components";

export const Info = styled.div`
    width: 80%;
    height: 1fr;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    margin-top: 5rem;

    h2 {
            text-align: center;
        font-size: 2rem;
    }
    p{
        font-size: 1.5rem;
        color: white;
    }
    img{
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
    }
    div {
        margin-bottom: 10rem;
    }
    
  `  ;