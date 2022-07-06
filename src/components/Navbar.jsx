import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 0.75rem 1.25rem;
`;

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>left</Left>
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
