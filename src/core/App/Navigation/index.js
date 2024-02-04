import { StyledNav, Logo, NavList } from "./styled";
import logoSVG from "../../../common/images/VerticalPrintLogo.svg"

export const Navigation = () => {
  return (
      <StyledNav>
        <Logo src={logoSVG} />
        <NavList>O nas</NavList>
        <NavList>Technologia</NavList>
        <NavList>Detale</NavList>
        <NavList>Kontakt</NavList>
      </StyledNav>
  );
};
