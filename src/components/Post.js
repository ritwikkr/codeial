import React from "react";
import Wrapper from "../styles/PostStyle";

function Post() {
  return (
    <Wrapper>
      <form>
        <div className="form-content">
          <img
            src="https://headshots-2.imagely.com/wp-content/uploads/sites/79/nggallery/headshot-gallery/cache/albert-dera-ILip77SbmOE-unsplash.jpg-nggid013-ngg0dyn-800x1200-00f0w010c010r110f110r010t010.jpg"
            alt="profile pic"
          />
          <input type="text" placeholder="Post a new thread..." />
        </div>
        <hr />
        <div className="form-content">
          <button>Post</button>
        </div>
      </form>
    </Wrapper>
  );
}

export default Post;
