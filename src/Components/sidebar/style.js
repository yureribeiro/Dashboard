import styled from "styled-components";

export const Container = styled.nav`
  min-width: 3.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #393E46;
  height: 70vh;
  border-radius: 1rem;
  box-shadow: .1rem .1rem .3rem #000; 
  margin-right: 1rem;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  a {
    cursor: pointer;
    margin-top: 2rem; 
    background-color: #222831;
    color: #000;
    padding: .5rem;
    border-radius: .5rem;
    border: .1rem solid #232323;
    :hover {
      background: #FDB827;
      box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
    }
  }

  img {
    max-width: 2rem;
  }
`

