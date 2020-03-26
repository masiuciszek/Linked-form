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
    <Title mainTitle="your details" />
    <ConfirmData>
      <div>
        <span>FirstName</span>
        {formState.firstName}
      </div>
      <div>
        {' '}
        <span>lastName</span>
        {' '}
        {formState.lastName}
      </div>
      <div>
        {' '}
        <span>Email</span>
        {' '}
        {formState.email}
      </div>
      <div>
        {' '}
        <span>age</span>
        {' '}
        {formState.age}
      </div>
      <div>
        {' '}
        <span>tech sill</span>
        {' '}
        {formState.techSkills}
      </div>
    </ConfirmData>
    <BtnGroup>
      <FormBtn onClick={decrease}>prev</FormBtn>
      <FormBtn onClick={finalSubmit}>Confirm</FormBtn>
    </BtnGroup>
  </StyledWrapper>
);
export default Confirm;
