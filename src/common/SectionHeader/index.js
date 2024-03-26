import { StyledSection, BackgroundVideo, HeaderText, HeaderTitle } from "./styled";

const SectionHeader = () => (
  <StyledSection>
    <BackgroundVideo autoPlay playsInline loop muted>
      <source
        src={process.env.PUBLIC_URL + "/backgroundVideo.mp4"}
        type="video/mp4"
      />
    </BackgroundVideo>
    <HeaderTitle>
      <p>REWOLUCYJNY DRUK ŚCIENNY</p>
    </HeaderTitle>
    <HeaderText>
      <p>VerticalPrint...odważ się! <br /> Wyróżniaj się czymś unikalnym</p>
    </HeaderText>
  </StyledSection>
);

export default SectionHeader;
