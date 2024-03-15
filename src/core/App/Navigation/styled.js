import styled, { keyframes } from "styled-components";
import { ReactComponent as LogoIcon } from "../../../common/images/VerticalPrintLogo.svg";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3 as MenuIcon, HiX as CloseIcon } from "react-icons/hi"; // Import ikon z react-icons

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
  gap: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    align-content: center;
    display: inline-flex;
    gap: 25px;
    padding: 10px;
  }
`;

export const Logo = styled(NavLink)`
  padding: 5px;
`;

export const VPrintIcon = styled(LogoIcon)`
  height: 90px;
  width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    display: grid;
    height: 50px;
    width: auto;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 15px;
    padding-top: 5px;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  color: ${({ theme }) => theme.colors.alto};
  width: 30px;
  height: 30px;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  color: ${({ theme }) => theme.colors.alto};
  width: 30px;
  height: 30px;
  display: grid;
`;

export const Button = styled.button`
  padding: 0px;
  border: none;
  width: 0px;
  display: grid;
`;

// Definicja animacji wysuwania menu
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Definicja animacji chowania menu
const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 80px; /* Adjust as necessary based on your navigation bar height */
  right: 0;
  background-color: ${({ theme }) => theme.colors.mineShaft};
  width: 200px; /* Adjust as necessary */
  height: calc(100vh - 80px); /* Adjust as necessary */
  overflow-y: auto; /* Enable scrolling if content exceeds height */
  padding: 20px;
  z-index: 1000; /* Ensure it's above other content */
  animation: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)} 0.5s ease-in-out; /* Ustawienie animacji na 0.5s */
`;
