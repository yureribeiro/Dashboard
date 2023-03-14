import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  justify-content: center;
  aligh-items: center;
  margin: 24vh -20vh 0 25vh;
`

export const CategoryContainer = styled.div`
  background: linear-gradient(150.65deg, #DF8600 8.59%, #E5BF37 85.12%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  gap: 1rem;
  border-radius: .5rem;
`

export const Card = styled.div`
  cursor: pointer;
  background-color: #232323;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  border-radius: .5rem;
  text-transform: uppercase;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem; 

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