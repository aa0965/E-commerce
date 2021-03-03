import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 80vw;
  
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-item: center;
  
  margin: 50px auto 0;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
  
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 26%;
  align-items:center;
  &:last-child {
    width: 8%;
  }
`;
export const HeaderBlockContainerD = styled.div`
  text-transform: capitalize;
  width: 26%;
  margin-right:4px;
  padding-right:2px;
  &:last-child {
    width: 8%;
  }
`;
export const TotalContainer = styled.div`
  margin-top: 30px;
  font-size: 36px;

  align-item:center;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
export const StripeContainer = styled.div`
  text-align: center;
  font-size: 40px;
  color: red;
`;