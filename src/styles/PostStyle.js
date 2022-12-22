import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  background-color: white;
  padding: 20px;
  .post-title {
    height: 80px;
    display: flex;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .post-author {
      p {
        &:last-child {
          color: gray;
          font-size: 12px;
        }
      }
    }
  }
  .post-content {
    margin-bottom: 10px;
  }
  .cta {
    display: flex;
    height: 40px;
    .like,
    .comments {
      display: flex;
      margin-right: 20px;
      display: flex;
      align-items: center;
      i {
        margin-right: 10px;
        font-size: 20px;
        color: gray;
        cursor: pointer;
      }
      p {
        font-size: 12px;
      }
    }
  }
  .comment-section {
    margin-top: 15px;
    input {
      width: 100%;
      height: 40px;
      padding-left: 10px;
      font-size: 18px;
      outline: none;
      border: 1px solid gray;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    .comment {
      position: relative;
      background-color: rgb(236, 239, 250);
      margin-bottom: 15px;
      border-radius: 5px;
      padding: 20px;
      .comment-title {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        p {
          margin-right: 10px;
        }
        .comment-time {
          color: gray;
          font-size: 12px;
        }
      }
      .heart-icon {
        cursor: pointer;
        position: absolute;
        top: 18%;
        right: 4%;
        font-size: 20px;
      }
    }
  }
`;

export default Wrapper;
