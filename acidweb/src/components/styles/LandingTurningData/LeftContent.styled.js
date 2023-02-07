import styled from 'styled-components';

export const LeftContent = styled.div`
    position: absolute;
    background-color: #ffffff transparent;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    h1{
        position: relative;
        top: 20%;
        left: 10%;
        background-color: transparent;
        font-size: 5rem;
        font-weight: 700;
        z-index: 1;
        width: 50%;
    }
    p{
        z-index: 1;
        position: relative;
        font-weight: 700;
        top: 20%;
        left: 10%;
        background-color: transparent;
        font-size: 1.5rem;
        width: 50%;
        }

    
`;