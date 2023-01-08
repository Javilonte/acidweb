import styled from 'styled-components';

export const Nav = styled.nav`
color:#757575;
background:rgba(0,0,0,0.3);
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
  }

  a {
    color: #fff;
    text-decoration: none;
  }
}
`;
