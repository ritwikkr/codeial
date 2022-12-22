import styled from "styled-components";

const Wrapper = styled.div`
  height: 20vh;
  background-color: white;
  margin: 20px;
  padding: 20px;
  position: relative;
  form {
    .form-content {
      &:first-child {
        height: 10vh;
      }
      display: flex;
      align-items: flex-start;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 10px;
      }
      input {
        border: none;
        outline: none;
        margin-top: 20px;
        font-size: 18px;
      }
      button {
        width: 100px;
        height: 40px;
        background-color: orangered;
        color: white;
        font-weight: 700;
        font-size: 18px;
        cursor: pointer;
        position: absolute;
        bottom: 10%;
        right: 2%;
        border: none;
        border-radius: 5px;
      }
    }
  }
`;

export default Wrapper;
