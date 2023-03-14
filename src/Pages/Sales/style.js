import styled from "styled-components";


export const Container = styled.div`
margin: 25vh 0 0 40vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
background: linear-gradient(137.59deg, #DF8600 35.2%, #E5BF37 82.62%);
border: .1rem solid rgba(228, 228, 228, 0.54);
border-radius: .5rem;
padding: 1rem;
max-width: 40rem;
`


export const SalesForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 1rem 1.5rem;

  label {
    font-weight: bold;
    display: flex;
    text-align: left;
  }

  input {
    width: 100%;
    padding: .5rem 1rem;
    border: .1rem solid rgba(228, 228, 228, 0.54);
    border-radius: .5rem;
    background: rgba(20, 20, 20, 0.56);
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
    outline: none;
    margin-bottom: 1rem;
    color: #ffff;
    cursor: pointer;
  } 
  input::placeholder {
    color: #d3d3d3;
  }

  

  button {
    background: linear-gradient( 92deg, #ecdb7b, #daa000);
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: .5rem;
    padding: .4rem;
    width: 70%;
    font-weight: bold;
    cursor: pointer;
    transition: .4s;
    }
    button:hover {
      background: #0f0f0f77;
      color: #ffff;
    }
`