import React from "react";
import Wrapper from "../styles/ProfilePageStyle";

function ProfilePage() {
  return (
    <Wrapper>
      <section>
        <div className="profile-pic">
          <img
            src="https://headshots-2.imagely.com/wp-content/uploads/sites/79/nggallery/headshot-gallery/cache/albert-dera-ILip77SbmOE-unsplash.jpg-nggid013-ngg0dyn-800x1200-00f0w010c010r110f110r010t010.jpg"
            alt="profile pic"
          />
          <p>Update Profile</p>
        </div>
        <form>
          <div className="form-content">
            <label htmlFor="name">Name</label>
            <input type="text" value={"Setve Jobs"} name="name" id="name" />
          </div>
          <div className="form-content">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              value={"Password@123"}
              name="password"
              id="password"
            />
          </div>
          <div className="form-content buttons">
            <button>Edit Profile</button>
            <button>Save</button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
}

export default ProfilePage;
