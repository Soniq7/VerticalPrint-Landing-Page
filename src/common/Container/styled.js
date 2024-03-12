import styled from "styled-components";

const Main = styled.main`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const Container = ({ children }) => (
  <Main>
    {children}
  </Main>
);

export default Container;