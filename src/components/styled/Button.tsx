import styled from 'styled-components';


export const BtnPrimary = styled.button`
  padding: .3rem .5rem;
  border: 2px solid ${(props) => props.theme.colors.offWhite};
  background: none;
  width: 12rem;
  font-size: 1.8rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.offWhite};
  margin: 1rem 0;
  box-shadow:${({ theme }) => theme.shadow.lightShadow};
  cursor: pointer;
  outline: none;
  position: relative;
  transition: ${(props) => props.theme.transition.mainTransition};
  &:focus{
    top: 5px;
  }
  &:hover{
  width: 13rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.offWhite};
  box-shadow:${({ theme }) => theme.shadow.darkShadow};
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: .4rem .9rem;
  }
`;


export const FormBtn = styled.button`

`;
