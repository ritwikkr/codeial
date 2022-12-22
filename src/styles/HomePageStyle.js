import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(236, 239, 250);
  main {
    width: 70%;
    margin: auto;
    display: flex;
    min-height: calc(100vh - 10vh);
    .left {
      border: 2px solid black;
      width: 60%;
    }
    .right {
      border: 2px solid green;
      width: 40%;
    }
  }
`;

export default Wrapper;
