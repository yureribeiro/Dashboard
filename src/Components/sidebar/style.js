import styled from "styled-components";

export const Container = styled.nav`
  min-width: 3.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #393E46;
  min-height: 60vh;
  max-height: 82vh;
  border-radius: .6rem;
  box-shadow: .1rem .1rem .3rem #000; 
  padding-bottom: 1rem;
  margin-right: 1rem;
  
  @media (max-width: 700px) {
    flex-direction: row;
    min-height: 7vh;
    max-height: 10vh;
    align-items: center;
   }


  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      flex-direction: row;
      gap: 1rem;
      padding-left: 1rem;
     }
  }

  a {
    cursor: pointer;
    margin-top: 2rem; 
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
  }

  img {
    max-width: 2rem;
  }
`

