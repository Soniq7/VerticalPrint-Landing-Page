import { StyledSection, Video } from "./styled";

const Section = ({ title, body, headerContent }) => (
  <StyledSection>
    <Video autoPlay playsInline loop muted>
      <source src={process.env.PUBLIC_URL + "/backgroundVideo.mp4"} type="video/mp4"  />
    </Video>
  </StyledSection>
);

export default Section;