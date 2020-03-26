/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  StyledForm, StyledFormGroup, StyledFormLabel, StyledInput, StyledBtn,
} from '../styled/FormStyles';

interface Props {
  count: number;
  decrease: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  firstName: string;
  lastName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserForm: React.FC<Props> = ({
  count,
  decrease,
  handleChange, handleSubmit, firstName, lastName,
}) => {
  let a;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFormGroup>
        <StyledFormLabel htmlFor="firstName">
          <span>first name</span>
          <StyledInput type="text" name="firstName" value={firstName} placeholder="First name" onChange={handleChange} />
        </StyledFormLabel>
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledFormLabel htmlFor="lastName">
          <span>last name</span>
          <StyledInput type="text" name="lastName" value={lastName} placeholder="Last name" onChange={handleChange} />
        </StyledFormLabel>
      </StyledFormGroup>
      <StyledBtn onClick={decrease}>Prev</StyledBtn>
      <StyledBtn>Next</StyledBtn>
    </StyledForm>
  );
};
export default UserForm;
