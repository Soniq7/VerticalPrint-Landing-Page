import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
`;

const Container = ({ children }) => (
  <Main>
    {children}
  </Main>
);

export default Container;
