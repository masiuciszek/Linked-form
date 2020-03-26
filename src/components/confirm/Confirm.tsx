import * as React from 'react';
import { StyledConfirm, ConfirmData } from './Styled.Confirm';
import Title from '../styled/Title';
import { IFormData } from '../../App';
import { FormBtn } from '../styled/Button';

interface Props {
  formState: IFormData;
  decrease: () => void;
  finalSubmit: () => void;
}

const Confirm: React.FC<Props> = ({ formState, decrease, finalSubmit }) => (
  <StyledConfirm>
    <Title mainTitle="Thank you" subTitle="Hope you enjoy" />
    <ConfirmData>
      <div>{formState.firstName}</div>
      <div>{formState.lastName}</div>
      <div>{formState.email}</div>
      <div>{formState.age}</div>
      <div>{formState.techSkills}</div>
    </ConfirmData>
    <FormBtn onClick={decrease}>prev</FormBtn>
    <FormBtn onClick={finalSubmit}>Confirm</FormBtn>
  </StyledConfirm>
);
export default Confirm;
