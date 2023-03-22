import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
background: linear-gradient(20.65deg, #DF8600 8.59%, #E5BF37 85.12%);
padding: 1rem;
margin-top: 1rem;
border-radius: .5rem;

div {
  display: flex;
  gap: 1rem;
  margin-bottom: .5rem;
  padding: .5rem;
  border-radius: .5rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

p:first-of-type {
  font-weight: bold;
}
`