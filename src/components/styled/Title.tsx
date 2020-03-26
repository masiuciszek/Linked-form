import styled from 'styled-components';
import * as React from 'react';

interface Props {
  mainTitle: string;
  subTitle?: string;
}

const Title: React.FC<Props> = ({ mainTitle, subTitle }) => (
  <StyledTitle>
    <h3>{mainTitle}</h3>
    <br />
    <strong>{subTitle}</strong>
  </StyledTitle>
);
export default Title;


const StyledTitle = styled.section`
  padding: 2rem;
  text-align: center;
  letter-spacing: .1rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  h3{
    padding: 2rem 0;
    font-size: 4.5rem;
  }
  strong{
    font-size: 2.5rem;
  }
  border-bottom: 2px solid ${({ theme }) => theme.colors.offWhite};
  margin-bottom: 1.5rem;

  @media(max-width:372px){
    h3{
      font-size: 3rem;
    }
    strong{
      font-size: 2rem;
    }

  }
`;
