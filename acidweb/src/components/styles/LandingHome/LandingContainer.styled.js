import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    overflow: hidden;
   
`;


export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
    height: 100vh;
    width: 100%;
  object-fit: cover;
  z-index: -1;
`;
