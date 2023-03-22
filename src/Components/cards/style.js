import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const BalanceCards = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(150.65deg, #DF8600 8.59%, #E5BF37 85.12%);
  padding: 1rem;
  border-radius: .5rem;
  width: 50%;
  margin-right: 5rem;
  gap: .5rem;
  font-weight: bold;

  button {
    background-color: #000;
    color: #fff;
    font-weight: bold;
    padding: .5rem 1rem;
    border-radius: .5rem;
    border: .1rem solid #232323;
  }
`