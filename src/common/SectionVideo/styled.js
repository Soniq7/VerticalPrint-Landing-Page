import styled from "styled-components";

export const StyledSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Video = styled.video`
  position: absolute;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  margin-top: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletHorizontalMax}px) {
    margin-top: 80px;
  }
`;
export const HeaderTitle = styled.div`
  position: absolute;
  z-index: -1;
  left: 5%;
  transform: translate(0%, 60%);
  color: ${({ theme }) => theme.colors.bondiBlue};
  font-family: "Ubuntu Condensed", sans-serif;
  font-weight: 700;
  line-height: 8vw;
  font-size: 7vw; /* Dostosuj rozmiar tekstu według potrzeb */
  text-align: left; /* Wyśrodkuj tekst */
  padding: 2vw; /* Dodaj wypełnienie dla lepszego wyglądu */
  width: 50%; /* Szerokość tekstu */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    transform: translate(0%, 90%);
  }
`;


export const HeaderText = styled.div`
  position: absolute;
  z-index: -1;
  left: 5%;
  transform: translate(0%, 300%);
  line-height: 1vw;
  color: ${({ theme }) => theme.colors.alto};; /* Ustaw kolor tekstu na biały lub inny kontrastujący kolor */
  font-size: 3vw; /* Dostosuj rozmiar tekstu według potrzeb */
  text-align: left; /* Wyśrodkuj tekst */
  padding: 2vw; /* Dodaj wypełnienie dla lepszego wyglądu */
  width: 80%; /* Szerokość tekstu */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileVerticalMax}px) {
    transform: translate(0%, 370%);
  }
`;
