import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  padding: 25px;
  border-bottom: 1px solid rgba(80, 86, 229, 0.5);
`;

export const NavList = styled.nav`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const StyledLinks = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  background-color: #fff;
  color: #5056e5;
  border-radius: 4px;
  border: 2px solid #5056e5;
  padding: 6px 11px 7px;
  width: 130px;
  line-height: 140%;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 7px 7px 15px rgb(63 65 125);
  }
  &.active {
    background: #5056e5;
    color: #fff;
  }
`;
