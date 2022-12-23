import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  background-color: rgb(236, 239, 250);
  height: calc(100vh - 10vh);
  section {
    margin-left: 50px;
    width: 500px;
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    .session-heading {
      display: flex;
      p {
        cursor: pointer;
        text-align: center;
        flex: 1;
        margin: 0 10px 10px 10px;
      }
      p.active {
        border-bottom: 2px solid red;
        color: orangered;
      }
    }
    .session-body {
      form {
        .form-content {
          display: flex;
          flex-direction: column;
          input {
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            padding-left: 10px;
          }
          button {
            background-color: transparent;
            padding: 5px;
            height: 40px;
            font-weight: 900;
            cursor: pointer;
            &:first-child {
              margin-bottom: 30px;
            }
            &:last-child {
              background-color: orangered;
              border: none;
              color: white;
            }
            img {
              width: 30px;
              margin-right: 10px;
            }
          }
          .google {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid orangered;
            color: orangered;
          }
        }
        .divider {
          display: flex;
          align-items: center;
          flex-direction: row;
          margin-bottom: 10px;
          hr {
            flex: 1;
            height: 1px;
            width: 100px;
            margin: 0 20px;
          }
        }
      }
    }
  }
`;

export default Wrapper;
