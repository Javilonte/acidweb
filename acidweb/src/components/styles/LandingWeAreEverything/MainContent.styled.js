import styled from "styled-components";

export const TitleDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;

    h1 {
        font-size: 3rem;
    }
    p {
        font-size: 1.5rem;
        
        color: ${props => props.textColor || "black"};
    }

`;
