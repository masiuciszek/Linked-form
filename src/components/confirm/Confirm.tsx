import * as React from 'react';
import { ConfirmData } from './Styled.Confirm';
import Title from '../styled/Title';
import { IFormData } from '../../App';
import { FormBtn } from '../styled/Button';
import { StyledWrapper } from '../styled/Wrapper';
import { BtnGroup } from '../styled/FormStyles';

interface Props {
  formState: IFormData;
  decrease: () => void;
  finalSubmit: () => void;
}

const Confirm: React.FC<Props> = ({ formState, decrease, finalSubmit }) => (
  <StyledWrapper>
    <Title mainTitle="Check your" subTitle="User details" />
    <ConfirmData>
      <div>{formState.firstName}</div>
      <div>{formState.lastName}</div>
      <div>{formState.email}</div>
      <div>{formState.age}</div>
      <div>{formState.techSkills}</div>
    </ConfirmData>
    <BtnGroup>
      <FormBtn onClick={decrease}>prev</FormBtn>
      <FormBtn onClick={finalSubmit}>Confirm</FormBtn>
    </BtnGroup>
  </StyledWrapper>
);
export default Confirm;
