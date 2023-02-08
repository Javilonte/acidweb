import styled from "styled-components";

export const MainFooter = styled.div`

    position: absolute;
    bottom: 0;
    width: 100%;
    height: 150px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h1{
        font-size: 1.5rem;
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

`