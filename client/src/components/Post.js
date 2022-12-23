import React from "react";
import Wrapper from "../styles/PostStyle";

function Post() {
  return (
    <Wrapper>
      <div className="post-title">
        <img
          src="https://headshots-2.imagely.com/wp-content/uploads/sites/79/nggallery/headshot-gallery/cache/albert-dera-ILip77SbmOE-unsplash.jpg-nggid013-ngg0dyn-800x1200-00f0w010c010r110f110r010t010.jpg"
          alt="profile"
        />
        <div className="post-author">
          <p>Steve Jobs</p>
          <p className="post-time">a minute ago</p>
        </div>
      </div>
      <div className="post-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure
        tenetur ipsum eum aliquid culpa unde dicta illo amet libero.
      </div>
      <hr />
      <div className="cta">
        <div className="like">
          <i className="fa-regular fa-heart"></i>
          <p>145</p>
        </div>
        <div className="comments">
          <i className="fa-regular fa-message"></i>
          <p>5</p>
        </div>
      </div>
      <hr />
      <div className="comment-section">
        <input type="text" placeholder="Start typing comment here..." />
        <div className="comment">
          <div className="comment-title">
            <p>Steve Jobs</p>
            <p className="comment-time">a minute ago</p>
            <p className="likes">45 likes</p>
          </div>
          <div className="comment-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              consectetur!
            </p>
          </div>
          <div className="heart-icon">
            {/* Position absolute */}
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
        <div className="comment">
          <div className="comment-title">
            <p>Steve Jobs</p>
            <p className="comment-time">a minute ago</p>
            <p className="likes">45 likes</p>
          </div>
          <div className="comment-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              consectetur!
            </p>
          </div>
          <div className="heart-icon">
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Post;
