import { StyledNav, Logo, NavList, VPrintIcon } from "./styled";
// import logoSVG from "../../../common/images/VerticalPrintLogo.svg"

export const Navigation = () => {
  return (
      <StyledNav>
        <Logo 
        to="/"
        >
        <VPrintIcon />
        </Logo>
        <NavList>O nas</NavList>
        <NavList>Technologia</NavList>
        <NavList>Detale</NavList>
        <NavList>Kontakt</NavList>
      </StyledNav>
  );
};
