import styled from "styled-components";

const Wrapper = styled.div`
  padding: 30px;
  height: calc(100vh - 10vh);
  background-color: rgb(236, 239, 250);
  section {
    background-color: white;
    border-radius: 5px;
    width: 500px;
    margin-left: 100px;
    padding: 20px;
    .profile-pic {
      /* border: 2px solid black; */
      margin-bottom: 20px;
      img {
        margin-left: 10px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      p {
        cursor: pointer;
      }
    }
    form {
      .form-content {
        /* border: 2px solid red; */
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        label {
          text-transform: uppercase;
          color: gray;
          margin: 0 0 5px 10px;
        }
        input {
          height: 40px;
          border: 2px solid gray;
          border-radius: 5px;
          outline: none;
          padding-left: 10px;
        }
      }
      .buttons {
        display: flex;
        flex-direction: row;
        button {
          height: 40px;
          width: 150px;
          margin-right: 10px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: 16px;
          &:first-child {
            border: 2px solid orangered;
            color: orangered;
            background-color: transparent;
          }
          &:last-child {
            background-color: orangered;
            color: white;
          }
        }
      }
    }
  }
`;

export default Wrapper;
