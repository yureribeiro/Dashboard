import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: .5rem;
  background-color: #393E46;
  box-shadow: .1rem .1rem .3rem #000; 
`

export const Card = styled.div`
  background-color: #222831;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #d3d3d3;
  border: .1rem solid #E1E8EB;
  border-radius: .5rem;
  padding: 1rem; 
  box-shadow: .1rem .1rem .3rem #000;
  :hover {
    color: #FFD369;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .2rem;
  padding: 1rem 0 .5rem 0;
  color: #fff;
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
  padding: .5rem;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: .5rem;
  :hover {
    background-color: #FDB827;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
  }
`