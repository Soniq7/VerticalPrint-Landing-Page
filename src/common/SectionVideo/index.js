import { StyledSection, Video } from "./styled";

const Section = ({ title, body, headerContent }) => (
  <StyledSection>
    <Video autoPlay playsInline loop muted>
      <source src={require("../../common/video/backgroundVideo.mp4")} type="video/mp4" />
    </Video>
  </StyledSection>
);

export default Section;