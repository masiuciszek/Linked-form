/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  StyledForm, StyledFormGroup, StyledFormLabel, StyledInput, BtnGroup,
  StyledSelect,
} from '../styled/FormStyles';
import { FormBtn } from '../styled/Button';

interface Props {
  title: string;
  decrease: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  age: string;
  email: string;
  techSkills: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => void;
}

const PersonalForm: React.FC<Props> = ({
  title,
  handleChange, decrease, age, email, techSkills, handleSubmit,
}) => (
  <StyledForm onSubmit={handleSubmit}>
    <h3>{title}</h3>
    <StyledFormGroup>
      <StyledFormLabel htmlFor="email">
        <span>email</span>
        <StyledInput type="email" name="email" value={email} placeholder="email" onChange={handleChange} required />
      </StyledFormLabel>
    </StyledFormGroup>

    <StyledFormGroup>
      <StyledFormLabel htmlFor="age">
        <span>age</span>
        <StyledInput type="number" name="age" value={age} placeholder="age" onChange={handleChange} required />
      </StyledFormLabel>
    </StyledFormGroup>

    <StyledFormGroup>
      <StyledFormLabel htmlFor="techSkills">
        <span className="techSkills">techSkills</span>
        <StyledSelect value={techSkills} onChange={handleChange} name="techSkills">
          <option value="" disabled>--Choose your skill--</option>
          <option value="javascript">javascript</option>
          <option value="haskell">Haskell</option>
          <option value="golang">Golang</option>
          <option value="sql">Sql</option>
          <option value="python">Python</option>
        </StyledSelect>
      </StyledFormLabel>
    </StyledFormGroup>
    <BtnGroup>
      <FormBtn onClick={decrease}>Prev</FormBtn>
      <FormBtn>Next</FormBtn>
    </BtnGroup>
  </StyledForm>
);
export default PersonalForm;
