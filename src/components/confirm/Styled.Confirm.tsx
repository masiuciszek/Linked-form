/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';


export const ConfirmData = styled.section`
  font-size: 2rem;
  div{
    padding: 1.2rem;
    color: ${(props) => props.theme.colors.white};
    span{
     color: ${(props) => props.theme.colors.primary};
    font-weight: 800;
    margin: 0 .5rem 0 0;
    text-transform: capitalize;
    }
  }
`;
