import * as React from 'react';
import Title from '../styled/Title';
import { BtnPrimary } from '../styled/Button';
import { StyledWrapper } from '../styled/Wrapper';

interface Props {
  increase: () => void;
}

const Welcome: React.FC<Props> = ({ increase }) => (
  <>
    <StyledWrapper>
      <Title mainTitle="Welcome" subTitle="Let's sign up" />
      <BtnPrimary type="button" onClick={increase}>Sign up</BtnPrimary>
    </StyledWrapper>
  </>
);
export default Welcome;
