import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px) {
    align-items: center;
    margin-top:30px;
    
    border-top: solid 0.3px;
    width:90vw;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }
`;