import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  aligh-items: center;
  padding: 20vh 1rem 0 20vw;
`

export const Sidebar = styled.nav`
  position: fixed;
  top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: linear-gradient(150.65deg, #DF8600 8.59%, #E5BF37 85.12%);
  padding: 12.5rem 0 0 0;
  height: 100vh;
  min-width: 20vw;

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

export const CategoryContainer = styled.div`
  background: linear-gradient(150.65deg, #DF8600 8.59%, #E5BF37 85.12%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;
  gap: .5rem;
  border-radius: .5rem;
  margin-left: 2.5rem;
`

export const Card = styled.div`
  cursor: pointer;
  background-color: #232323;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  border-radius: .5rem;
  flex-direction: column;
  padding: 1rem; 
  height: 7rem;

  :hover {
    box-shadow: .1rem .1rem .4rem #000;
    color: #ffff;
  }

  img {
    width: 4.8rem;
    background: linear-gradient(150.65deg, #DF8600 8.59%, #E5BF37 85.12%);
    border-radius: 50%;
    padding: 1rem;
  }
`

export const BalanceCards = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(150.65deg, #DF8600 8.59%, #E5BF37 85.12%);
  padding: 1rem;
  border-radius: .5rem;
  width: 90%;
  margin-right: 5rem;
  height: 5rem;
  gap: .5rem;
  font-weight: bold;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-right: 1rem;
`

export const Histórico = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(20.65deg, #DF8600 8.59%, #E5BF37 85.12%);
  padding: 1rem;
  margin-top: 1rem;
  border-radius: .5rem;

  table {
    border-collapse: collapse;
  }
  
  td, th {
    border: 1px solid #000;
    text-align: left;
    padding: .2rem;
    font-weight: bold;
  }
  
  tr:nth-child(even) {
    background-color: #232323;
    color: #ffff;
  }
`