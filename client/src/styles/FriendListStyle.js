import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgb(224, 224, 225);
  width: 70%;
  margin: 20px auto;
  height: 45vh;
  overflow-y: scroll;
  header {
    height: 50px;
    display: flex;
    align-items: center;
    p {
      margin-left: 10px;
    }
  }
  .body {
    .friend {
      /* border: 2px solid red; */
      height: 8vh;
      margin: 10px;
      display: flex;
      align-items: center;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
  }
`;

export default Wrapper;
