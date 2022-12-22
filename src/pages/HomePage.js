import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import Wrapper from "../styles/HomePageStyle";

function HomePage() {
  return (
    <Wrapper>
      <Navbar />
      <main>
        <div className="left">
          <Post />
        </div>
        <div className="right"></div>
      </main>
    </Wrapper>
  );
}

export default HomePage;
