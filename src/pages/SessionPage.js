import React, { useState } from "react";
import Wrapper from "../styles/SessionPageStyle";

function SessionPage() {
  const [signIn, setSignIn] = useState(true);
  function changeSessionTypeToSignIn() {
    setSignIn(true);
  }
  function changeSessionTypeToSignUp() {
    setSignIn(false);
  }
  return (
    <Wrapper>
      <section>
        <div className="session-heading">
          <p
            onClick={changeSessionTypeToSignIn}
            className={signIn ? "active" : null}
          >
            Sign In
          </p>
          <p
            onClick={changeSessionTypeToSignUp}
            className={signIn ? null : "active"}
          >
            Sign up
          </p>
        </div>
        <div className="session-body">
          <form>
            {!signIn && (
              <div className="form-content">
                <input type="name" placeholder="Name" />
              </div>
            )}
            <div className="form-content">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-content">
              <input type="password" placeholder="Password" />
            </div>
            {!signIn && (
              <div className="form-content">
                <input type="password" placeholder="Confirm password" />
              </div>
            )}
            <div className="form-content divider">
              <hr />
              <p>OR</p>
              <hr />
            </div>
            <div className="form-content">
              <button className="google">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                  alt=""
                />
                <p>Sign {signIn ? `in` : `up`} With Google</p>
              </button>
              <button>{signIn ? "Sign In" : "Sign Up"}</button>
            </div>
          </form>
        </div>
      </section>
    </Wrapper>
  );
}

export default SessionPage;
