import React from "react";
import FriendList from "../components/FriendList";
import Navbar from "../components/Navbar";
import CreatePost from "../components/CreatePost";
import Wrapper from "../styles/HomePageStyle";
import Post from "../components/Post";

function HomePage() {
  return (
    <Wrapper>
      <Navbar />
      <main>
        <div className="left">
          <CreatePost />
          <Post />
        </div>
        <div className="right">
          <FriendList />
        </div>
      </main>
    </Wrapper>
  );
}

export default HomePage;
