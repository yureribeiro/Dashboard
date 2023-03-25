import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 49vh;
  background-color: #393E46;
  box-shadow: .1rem .1rem .3rem #000; 
  padding: 1rem;
  margin-top: 1rem;
  border-radius: .5rem;
  overflow-x: auto;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: .5rem;
    padding: .5rem;
    border-radius: .5rem;
    box-shadow: 0 .2rem .2rem rgba(0, 0, 0, 0.3);
    color: #d3d3d3;
  }

  p:first-of-type {
    font-weight: bold;
    color: #FFD369;
  }
`

export const Delete = styled.button`
  background-color: #222831;
  padding: .3rem .2rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: .5rem;
  :hover {
    background-color: #FDB827;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
  }
`