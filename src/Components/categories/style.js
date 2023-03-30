import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 50%;
  min-height: 60vh; 
  padding: 1rem;
  border-radius: .5rem;
  background-color: #393E46;
  box-shadow: .1rem .1rem .3rem #000; 
  
  @media (max-width: 600px) {
    min-width: 90%;
    max-height: 50%;
    
   }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222831;
  gap: .7rem;
  color: #d3d3d3;
  border-radius: .5rem;
  padding: 1rem; 
  box-shadow: .1rem .1rem .3rem #000;
  text-align: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  color: #fff;
  h4 {
    margin: .6rem 0;
    color: #FDB827;
  }
  h5 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .7rem 0;
  }
  label {
    font-size: .95rem;
    display:flex;
    justify-content: flex-start;
  }
  img {
    margin-left: .5rem;
    width: 1rem;
  }
`
export const Input = styled.input`
  padding: .3rem .7rem;
  background-color: #393E46;
  border: .1rem solid rgba(228, 228, 228, 0.2);
  border-radius: .5rem;
  margin-bottom: .5rem;
  outline: none;
  color: #ffff;
  cursor: pointer;

  ::placeholder {
      color: #d3d3d3;
    }
`
export const SubmitButton = styled.button`
  background-color: #FFD369;
  padding: .4rem;
  width: 100%;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: .5rem;

  :hover {
    background-color: #FDB827;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
  }
`
