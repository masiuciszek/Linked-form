import styled from 'styled-components';


export const StyledNav = styled.nav`
  padding: 1.5rem 1rem;
  background: ${(props) => props.theme.colors.common};
  color: ${(props) => props.theme.colors.white};
`;


export const NavTitle = styled.div`
  margin: 0 auto;
  padding: 1.6rem .5rem;
  width: 35rem;
  text-align:center;
  border-radius: 1.14em;
  h4{
    /* text-shadow:
    1px 0px 1px #ccc, 0px 1px 1px #eee,
    2px 1px 1px #ccc, 1px 2px 1px #eee,
    3px 2px 1px #ccc, 2px 3px 1px #eee,
    4px 3px 1px #ccc, 3px 4px 1px #eee,
    5px 4px 1px #ccc, 4px 5px 1px #eee,
    6px 5px 1px #ccc, 5px 6px 1px #eee,
    7px 6px 1px #ccc; */
    text-transform: uppercase;
    letter-spacing: .2rem;
    color:${(props) => props.theme.colors.white};
  }
`;
