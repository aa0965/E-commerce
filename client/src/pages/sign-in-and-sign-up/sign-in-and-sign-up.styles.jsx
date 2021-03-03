import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    display:flex;
    flex-direction:column;
    width:100vw;
    overflow-y: scroll;
overflow-x: hidden;
    align-items:center;
    justify-content:space-between;
  }
`;