import styled from "styled-components";

const Wrapper = styled.div`
  height: 10vh;
  background-color: rgb(99, 77, 231);
  padding: 0 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    .icon {
      color: white;
    }
  }
  .search-box {
    width: 500px;
    height: 40px;
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 10px;
    i {
      margin-right: 10px;
      color: gray;
    }
    input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 18px;
    }
  }
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    width: 250px;
    a {
      color: white;
      .profile {
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-right: 10px;
        }
        p {
          font-weight: 700;
        }
      }
    }
    .session {
      cursor: pointer;
      /* border: 2px solid red; */
      font-weight: 700;
    }
  }
`;

export default Wrapper;
