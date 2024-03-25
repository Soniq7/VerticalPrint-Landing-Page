import { StyledSection, Video, HeaderText, HeaderTitle } from "./styled";

const Section = ({ title, body, headerContent }) => (
  <StyledSection>
    <Video autoPlay playsInline loop muted>
      <source
        src={process.env.PUBLIC_URL + "/backgroundVideo.mp4"}
        type="video/mp4"
      />
    </Video>
    <HeaderTitle>
      <p>RWOLUCYJNY DRUK ŚCIENNY</p>
    </HeaderTitle>
    <HeaderText>
      <p>VerticalPrint...odważ się!</p>
      <p>Wyróżniaj się czymś unikalnym</p>
    </HeaderText>
  </StyledSection>
);

export default Section;
