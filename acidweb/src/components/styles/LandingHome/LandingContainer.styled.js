import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background-color: #f5f5f5 transparent;
    height: 100vh;
    width: 100%;
    display: flex;
    
  overflow: hidden;
    video {
        
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        
          }
`;


export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
