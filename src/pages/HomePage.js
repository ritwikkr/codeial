import React from "react";
import FriendList from "../components/FriendList";
import CreatePost from "../components/CreatePost";
import Wrapper from "../styles/HomePageStyle";
import Post from "../components/Post";
import Chat from "../components/Chat";

function HomePage() {
  return (
    <Wrapper>
      <main>
        <div className="left">
          <CreatePost />
          <Post />
        </div>
        <div className="right">
          <FriendList />
          <Chat />
        </div>
      </main>
    </Wrapper>
  );
}

export default HomePage;
