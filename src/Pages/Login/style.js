import styled from "styled-components"

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
display: flex;
position: fixed;
top: 0;
left: 0;
width: 100%;
background: linear-gradient(90.42deg, #DF8600 8.59%, #E5BF37 85.12%);
justify-content: space-between;
align-items: center;
padding-right: 2rem;


 a {
  color: #000;
  text-decoration: none;
  background: linear-gradient( 92deg, #ecdb7b, #daa000);
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: .5rem;
  padding: .4rem 1rem;
  cursor: pointer;
  transition: .4s;
 }
 a:hover {
    background: #0f0f0f77;
    color: #ffff;
}

  img {
    padding-left: 1rem;
    width: 5rem;
    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.9));
  }

  p {
    font-weight: bold;
  }
`

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(137.59deg, #DF8600 35.2%, #E5BF37 82.62%);
  border: .1rem solid rgba(228, 228, 228, 0.54);
  border-radius: .5rem;
  padding: 1rem;
  margin-top: 25vh;

  img {
    width: 7rem;
    filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 0.9));
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 1rem 1.5rem;

  p {
    font-weight: bold;
    display: flex;
    text-align: left;
  }

  input {
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

  div {
    display:flex;
    justify-content: center;
    align-items: center;
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

    small {
      margin-top: 1rem;
      display: flex;
      gap: .5rem;
    }

    a {
      text-decoration: none;
      color: #000;
      font-weight: bold;
      font-style: italic;
      cursor: pointer;
    }
`
