import styled from "styled-components";

export const Container = styled.nav`
  width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #393E46;
  height: 70vh;
  border-radius: 1rem;
  box-shadow: .1rem .1rem .3rem #000; 
  margin-right: 1rem;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  a {
    cursor: pointer;
  }

  img {
    max-width: 2rem;
  }
`
export const Button = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColor};
  border: .1rem solid #F8F1E5;
  border-radius: 1.3rem;
  cursor: pointer;
  padding: .3rem .1rem;
  
`

