import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(150.65deg, #DF8600 8.59%, #E5BF37 85.12%);
  padding: 12.5rem 0 0 0;
  height: 100vh;
  min-width: 19vw;

  div {
    display: flex;
    justify-content: flex-start;
    padding-left: 1.5rem;
    align-items: center;
    gap: .5rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #000; 
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }

  img {
    max-width: 2rem;
  }
`