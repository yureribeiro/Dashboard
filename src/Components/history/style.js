import styled from "styled-components";

export const Container = styled.div`
  scrollbar-width: thin;
  scrollbar-color: #FFD369 #222831;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #222831;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #FFD369;
    border-radius: 20px;
    border: 3px solid #222831;
  }

  display: flex;
  flex-direction: column;
  min-height: 50vh;
  max-height: 69vh; 
  background-color: #393E46;
  box-shadow: .1rem .1rem .3rem #000; 
  padding: 1rem;
  margin-top: 1rem;
  border-radius: .5rem;
  overflow: auto;

  @media (max-width: 1050px ) {
    min-height: 55%;
    max-height: 70vh;

    p:first-of-type {
      display: none;
    }
  }

  div {
    background-color: #222831;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: .5rem;
    padding: .5rem;
    border-radius: .5rem;
    box-shadow: .1rem .1rem .2rem rgba(0, 0, 0, 0.7);
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
  transition: .4s;
  :hover {
    background-color: #393E46;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
  }
`