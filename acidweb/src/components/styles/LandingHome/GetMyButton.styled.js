import styled from "styled-components";

export const GetMyButton = styled.button`
            background-image: linear-gradient(to right, #E55D87 0%, #5FC3E4  51%, #E55D87  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 50px;
            border: none;
            display: block;

            :hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
          a:visited { text-decoration: none; }


         
`;