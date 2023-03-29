import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
   }
`

export const BalanceCards = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #393E46;
  box-shadow: .1rem .1rem .3rem #000; 
  padding: 1rem;
  border-radius: .5rem;
  min-width: 30%;
  gap: .5rem;
  font-weight: bold;
  color: #d3d3d3;

  button {
    background-color: #FFD369;
    color: #000;
    font-weight: bold;
    padding: .5rem 1rem;
    border-radius: .5rem;
    border: .1rem solid #232323;
    :hover {
      background: #FDB827;
      box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
    }
  }
`

export const ChartCard = styled.div`
  display: flex;
  background-color: #393E46;
  box-shadow: .1rem .1rem .3rem #000; 
  padding: .7rem 1rem 0 0;
  border-radius: .5rem;
  min-width: 68%;
`