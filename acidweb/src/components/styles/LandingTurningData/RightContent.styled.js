import styled from 'styled-components';

export const RightContent = styled.div`
    position: absolute;
    background-color: #ffffff transparent;
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
    filter: blur(2px);
    border: 20px solid #fff;
    box-sizing: border-box;

    img{
        position: absolute;
        top: 10%;
        left: 45%;
        background-color: transparent;
        width: 800px;
        height: 100%;
        object-fit: cover;
        border-radius: 400px;
        
    }

`;