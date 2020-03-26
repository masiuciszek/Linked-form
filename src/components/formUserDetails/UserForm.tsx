/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  StyledForm, StyledFormGroup, StyledFormLabel, StyledInput, BtnGroup,
} from '../styled/FormStyles';
import { FormBtn } from '../styled/Button';

interface Props {
  decrease: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  firstName: string;
  lastName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserForm: React.FC<Props> = ({

  decrease,
  handleChange, handleSubmit, firstName, lastName,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <StyledFormGroup>
      <StyledFormLabel htmlFor="firstName">
        <span>first name</span>
        <StyledInput type="text" name="firstName" value={firstName} placeholder="First name" onChange={handleChange} required />
      </StyledFormLabel>
    </StyledFormGroup>
    <StyledFormGroup>
      <StyledFormLabel htmlFor="lastName">
        <span>last name</span>
        <StyledInput type="text" name="lastName" value={lastName} placeholder="Last name" onChange={handleChange} required />
      </StyledFormLabel>
    </StyledFormGroup>
    <BtnGroup>
      <FormBtn onClick={decrease}>Prev</FormBtn>
      <FormBtn>Next</FormBtn>
    </BtnGroup>
  </StyledForm>
);
export default UserForm;
