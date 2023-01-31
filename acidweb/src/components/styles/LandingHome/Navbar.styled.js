import styled from 'styled-components';

export const Nav = styled.nav`
background-color: #ffffff;
display: flex;
align-items: center;
justify-content: space-between;
padding: 1rem 2rem;
position: absolute;
z-index: 1;
width: 100%;

img {
  height: 2.5rem;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 5rem;
    color: black;
  }

  a {
    color: black;
    font-weight: 700;
    text-decoration: none;
  }
}
`;
