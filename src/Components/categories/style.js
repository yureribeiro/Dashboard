import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40%;
  padding: 1rem;
  border-radius: .5rem;
  background-color: #393E46;
  box-shadow: .1rem .1rem .3rem #000; 
`

export const Card = styled.div`
  background-color: #222831;
  gap: 1rem;
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
    margin: .7rem 0 .4rem 0;
  }

  label {
    font-size: .9rem;
    display:flex;
    justify-content: flex-start;
  }

  img {
    margin-left: .5rem;
    width: 1rem;
  }

  strong {
    margin-top: .5rem;
    color: #FFD369;
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
  width: 70%;
  border: none;
  cursor: pointer;
  font-weight: bold;
  border-radius: .5rem;

  :hover {
    background-color: #FDB827;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
  }
`

export const CategoriesMap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: .4rem;
  h4 {
    margin: .7rem 0 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Category = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: .1rem .1rem .3rem rgba(0, 0, 0, 0.4);
  border-radius: .5rem;
  padding: .1rem .2rem;
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