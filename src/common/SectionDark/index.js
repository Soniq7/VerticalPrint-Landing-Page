import { StyledSection, Header, Title, Body } from "./styled";

const Section = ({ title, body, headerContent }) => (
  <StyledSection>
    <Header>
      <Title>
        {title}
      </Title>
        {headerContent}
    </Header>
    <Body>
        {body}
    </Body>
  </StyledSection>
);

export default Section;
