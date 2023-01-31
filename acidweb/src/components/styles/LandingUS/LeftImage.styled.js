import styled from "styled-components";

export const LeftImage = styled.div`

    width: 50%;
    height: 500px;
    margin: 0 auto;
    img {
        max-width: 100%;
        max-height: 100%;   
        background-image: url(${(props) => props.src});
        object-fit: cover;
        border-radius: 138px;
        
        z-index: ${(props) => props.zIndex || 0}; //not working, trying to figure out
    
    }
`;
