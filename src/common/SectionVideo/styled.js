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
    margin-top: 90px;
  }
`;