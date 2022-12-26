import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "../store/slices/userSlice";
import Wrapper from "../styles/SessionPageStyle";

function SessionPage() {
  // Component State
  const [signIn, setSignIn] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();

  // Component Funtions
  function formSubmitHandler(e) {
    e.preventDefault();
    const { name, email, password, confirmPassword } = user;
    if (signIn) {
      dispatch(
        userAction({ sessionType: "logSession", user: { email, password } })
      );
    } else if (password === confirmPassword) {
      dispatch(
        userAction({
          sessionType: "createSession",
          user: { name, email, password },
        })
      );
    }
  }

  // Component Render
  return (
    <Wrapper>
      <section>
        <div className="session-heading">
          <p
            onClick={() => setSignIn(true)}
            className={signIn ? "active" : null}
          >
            Sign In
          </p>
          <p
            onClick={() => setSignIn(false)}
            className={signIn ? null : "active"}
          >
            Sign up
          </p>
        </div>
        <div className="session-body">
          <form onSubmit={formSubmitHandler}>
            {!signIn && (
              <div className="form-content">
                <input
                  type="name"
                  placeholder="Name"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
            )}
            <div className="form-content">
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="form-content">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            {!signIn && (
              <div className="form-content">
                <input
                  type="password"
                  placeholder="Confirm password"
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
                  }
                />
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
