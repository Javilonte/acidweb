import styled from 'styled-components'

export const WorkingComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    position: absolute;
    background-image: linear-gradient(180deg, #bce5ff 0, #9db9f2 50%, #7e8fb3 100%);
`
export const ImgComponent = styled.img`
    width:400px;
    height: 400px;
    position: absolute;
    z-index: 50;
    background-image: src="./public/Working.png";
`