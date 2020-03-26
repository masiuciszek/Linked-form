/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import {
  StyledForm, StyledFormGroup, StyledFormLabel, StyledInput, StyledBtn,
  StyledSelect,
} from '../styled/FormStyles';

interface Props {
  decrease: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  age: string;
  email: string;
  techSkills: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalForm: React.FC<Props> = ({
  handleChange, decrease, age, email, techSkills, handleSubmit,
}) => (
  <StyledForm onSubmit={handleSubmit}>
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
        <span>techSkills</span>
        <StyledSelect name="techSkills" value={techSkills}>
          <option value="" disabled>--Choose your skill--</option>
          <option value="javascript">javascript</option>
          <option value="haskell">Haskell</option>
          <option value="golang">Golang</option>
          <option value="sql">Sql</option>
          <option value="python">Python</option>
        </StyledSelect>
      </StyledFormLabel>
    </StyledFormGroup>


    <StyledBtn onClick={decrease}>Prev</StyledBtn>
    <StyledBtn>Next</StyledBtn>
  </StyledForm>
);
export default PersonalForm;