import styled from "styled-components";

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
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  
`;

export const Logo = styled.img`
 padding: 10px;
`;

export const NavList = styled.li`
padding: 20px;
list-style: none;
`;
