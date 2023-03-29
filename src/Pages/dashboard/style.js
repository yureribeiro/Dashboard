import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 96vw;
  max-height: 100%;
  margin-left: 1rem;
  display: flex;
  gap: 1rem;
  aligh-items: center;
  margin-top: 16vh;

  @media (max-width: 600px) {
   flex-direction: column;
   margin-top: 10vh;
  }
`

export const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
  padding-right: 1rem;
   }
`
