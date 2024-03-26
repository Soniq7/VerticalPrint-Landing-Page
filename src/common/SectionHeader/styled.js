import styled from "styled-components";

export const StyledSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    width: 100%;
  }
`;
export const HeaderTitle = styled.div`
  position: absolute;
  z-index: -1;
  left: 2%;
  bottom: -90vh;
  color: ${({ theme }) => theme.colors.bondiBlue};
  font-family: "Ubuntu Condensed", sans-serif;
  font-weight: 700;
  font-size: 5vw; /* Dostosuj rozmiar tekstu według potrzeb */
  text-align: left; /* Wyśrodkuj tekst */
  padding: 2vw; /* Dodaj wypełnienie dla lepszego wyglądu */

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 6vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 8vw;
  }
`;

export const HeaderText = styled.div`
  position: absolute;
  z-index: -1;
  left: 2%;
  bottom: -95vh;
  color: ${({ theme }) => theme.colors.alto};; /* Ustaw kolor tekstu na biały lub inny kontrastujący kolor */
  font-size: 2vw; /* Dostosuj rozmiar tekstu według potrzeb */
  text-align: left; /* Wyśrodkuj tekst */
  padding: 2vw; /* Dodaj wypełnienie dla lepszego wyglądu */

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    font-size: 3vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 4vw;
  }
`;
