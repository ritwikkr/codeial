import React from "react";
import Wrapper from "../styles/ChatStyle";

function Chat() {
  return (
    <Wrapper>
      <div className="chat-heading">
        <h3>Group Chat</h3>
      </div>
      <div className="chat-body">
        <div className="chat-date">
          <hr />
          <p>24 January, 2022</p>
          <hr />
        </div>
        <div className="chat">
          <img
            src="https://headshots-2.imagely.com/wp-content/uploads/sites/79/nggallery/headshot-gallery/cache/albert-dera-ILip77SbmOE-unsplash.jpg-nggid013-ngg0dyn-800x1200-00f0w010c010r110f110r010t010.jpg"
            alt="profile pic"
          />
          <div className="chat-msg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Corporis
            </p>
            <div className="chat-user">
              <p>Steve jobs</p>
              <p>6:30pm</p>
            </div>
          </div>
        </div>
        <div className="chat">
          <img
            src="https://headshots-2.imagely.com/wp-content/uploads/sites/79/nggallery/headshot-gallery/cache/albert-dera-ILip77SbmOE-unsplash.jpg-nggid013-ngg0dyn-800x1200-00f0w010c010r110f110r010t010.jpg"
            alt="profile pic"
          />
          <div className="chat-msg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Corporis
            </p>
            <div className="chat-user">
              <p>Steve jobs</p>
              <p>6:30pm</p>
            </div>
          </div>
        </div>
        <div className="chat">
          <img
            src="https://headshots-2.imagely.com/wp-content/uploads/sites/79/nggallery/headshot-gallery/cache/albert-dera-ILip77SbmOE-unsplash.jpg-nggid013-ngg0dyn-800x1200-00f0w010c010r110f110r010t010.jpg"
            alt="profile pic"
          />
          <div className="chat-msg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Corporis
            </p>
            <div className="chat-user">
              <p>Steve jobs</p>
              <p>6:30pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Start typing comment here..." />
        <button>Submit</button>
      </div>
    </Wrapper>
  );
}

export default Chat;
