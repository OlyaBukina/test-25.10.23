import { Container, NavList, StyledLinks } from './Header.styled';

const Header = ({ tabs }) => {
  return (
    <Container>
      <NavList>
        {tabs.map(({ id, title }) => (
          <StyledLinks key={id} to={id}>
            {title}
          </StyledLinks>
        ))}
      </NavList>
    </Container>
  );
};

export default Header;
