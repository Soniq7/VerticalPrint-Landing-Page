

const Section = ({ title, body, headerContent }) => (
  <StyledSection>
    <Body>
     {body}
    </Body>
    <Header>
      <Title>
        {title}
      </Title>
      {headerContent}
    </Header>
  </StyledSection>
);

export default Section;
