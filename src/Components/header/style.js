import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #393E46;
  justify-content: space-between;
  align-items: center;
  padding-right: 2rem;
  box-shadow: 0 .1rem .5rem #000; 

    img {
      padding-left: 1rem;
      width: 5rem;
      filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.9));
    }
`

export const User = styled.p`
  font-weight: bold;
  color: #FFD369;
`