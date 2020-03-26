import styled from 'styled-components';


export const StyledForm = styled.form`
  padding: 2rem 1rem;
  /* TODO:delete */
  border: 2px solid red;
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  display: flex;
  flex-direction: column;

  button{
    width: 12rem;
  }
 `;

export const StyledFormGroup = styled.div`
  padding: 1rem .5rem;
  /* TODO:delete */
  border: 2px solid blue;
  width: 80%;
  margin: 0 auto;
 `;

export const StyledFormLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: capitalize;
    transition: ${({ theme }) => theme.transition.mainTransition};
    span {
      font-size: 1.6rem;
      font-weight: 600;
      padding: .5rem;
    }
 `;

export const StyledInput = styled.input`
  margin: .6rem 0;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  padding: .4rem .8rem;
  height: 4rem;
  font-size: 1.6rem;
  transition: ${({ theme }) => theme.transition.mainTransition};
  width: 100%;
  outline:none;
  &:focus{
    box-shadow: ${({ theme }) => theme.shadow.lightShadow};
    width: 90%;
  }

 `;

export const BtnGroup = styled.div`
  display: flex;
  padding: 1rem 0;
  width: 70%;
  margin: 0 auto;
  justify-content: space-evenly;
`;

export const StyledSelect = styled.select`

`;
