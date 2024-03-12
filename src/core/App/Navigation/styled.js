import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../../common/images/VerticalPrintLogo.svg";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.ul`
  background: ${({ theme }) => theme.colors.mineShaft};
  color: ${({ theme }) => theme.colors.bondiBlue};
  font-size: 18px;
  position: fixed;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px 60px 0px 0px;
  gap: 100px;
  border-radius: 0px 0px 30px 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    align-content: center;
    display: inline-flex;
    gap: 25px;
    padding-bottom: 20px;
  }
`;

export const Logo = styled(NavLink)`
  padding: 5px;
`;

export const VPrintIcon = styled(LogoIcon)`
  height: 90px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 60px
  }
`;

export const NavList = styled.li`
  list-style: none;

  &:hover {
    color: ${({ theme }) => theme.colors.alto};
    transition: 0.5s;
    scale: 1.1;
    cursor: pointer;
  }
`;
