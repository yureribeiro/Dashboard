import styled from "styled-components"
import circleDown from "../../images/circledown.svg"

export const Categories = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: #393E46; 
  background-image: url(${circleDown});
  background-repeat: no-repeat;
  background-position: right; 
  background-size: 1.2rem;
  border: .1rem solid rgba(228, 228, 228, 0.2);
  border-radius: .4rem;
  margin: .5rem 0 .2rem 0;

  select {
    outline: none;
    color: #d3d3d3;
    width: 100%;
    background: transparent;
    padding: .3rem;
    border: none;
    -webkit-appearance: none;
  }     

  option {
    background-color: #393E46;
  }
`

export const TitleSales = styled.div`
  margin: .7rem 0 .5rem 0;
  display: flex;
  justify-content: center;
  
  h5 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    img {
      width: 1.2rem;
    }
  }
`