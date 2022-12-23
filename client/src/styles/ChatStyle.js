import styled from "styled-components";

const Wrapper = styled.div`
  width: 350px;
  height: 40vh;
  position: absolute;
  left: 61%;
  bottom: 0;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  .chat-heading {
    border-radius: 5px 5px 0 0;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: rgb(99, 77, 231);
    color: white;
  }
  .chat-body {
    overflow-y: scroll;
    margin-top: 5px;
    height: 30vh;
    padding: 10px;
    .chat-date {
      display: flex;
      align-items: center;
      justify-content: space-between;
      hr {
        height: 1px;
        width: 90px;
      }
      p {
        color: gray;
        font-size: 12px;
      }
    }
    .chat {
      display: flex;
      align-items: flex-start;
      margin-top: 10px;
      img {
        width: 50px;
        height: 40px;
        border-radius: 50%;
        margin-right: 5px;
      }
      .chat-msg {
        border-radius: 5px;
        padding: 5px;
        width: 65%;
        background-color: lightgray;
        .chat-user {
          display: flex;
          align-items: center;
          margin-top: 5px;
          p {
            font-size: 15px;
            &:last-child {
              margin-left: 5px;
              font-size: 12px;
              color: gray;
            }
          }
        }
      }
    }
  }
  .chat-input {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    display: flex;
    input {
      flex: 1;
      border: none;
      border-top: 1px solid gray;
      outline: none;
      padding-left: 10px;
    }
    button {
      width: 120px;
      background-color: orangered;
      color: white;
      border: none;
      cursor: pointer;
    }
  }
`;

export default Wrapper;
