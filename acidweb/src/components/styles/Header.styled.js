import styled from "styled-components";


export const StyledHeader = styled.header`
background-color: ${({theme}) => theme.colors.header};
padding: 0 40px;
height: 100px;

    h1{
        color:red;
    }


`

export const Nav = styled.nav`
    display:flex;
    align-items: center;
    justify-content: space-between;
 
`

export const Logo = styled.img`
    width: 180px;
    height: 120px;

    transform: translate(3ch, 3mm);
`
