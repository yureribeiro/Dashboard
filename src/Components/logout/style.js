import styled from "styled-components";

export const Buttonlogout = styled.button`
    margin: 4rem 1rem 0 1rem; 
    background-color: #222831;
    color: #000;
    padding: .5rem;
    border-radius: .5rem;
    border: .1rem solid #232323;
    transition: .4s;
    :hover {
      background-color: #393E46;
      border-color: #d3d3d3;
      box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
    }

    
    @media (max-width: 600px) {
      margin: 1rem .5rem 0 0;
     }
`