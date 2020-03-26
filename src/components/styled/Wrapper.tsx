import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  padding-right: .4rem;
  padding-left: .4rem;
  margin-right: auto;
  margin-left: auto;
  min-height: 80vh;
  display: flex;
  justify-content:center;
  align-items:center;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;


export const StyledWrapper = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  background: ${(props) => props.theme.colors.common};
  width: 90%;
  box-shadow:${({ theme }) => theme.shadow.lightShadow};
  display: flex;
  justify-content:center;
  flex-direction:column;
  align-items: center;
`;
