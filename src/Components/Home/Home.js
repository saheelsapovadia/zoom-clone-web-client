import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./home.scss";
const Home = () => {
  document.title = "Join a Meeting";
  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState("btn-disabled");
  useEffect(() => {
    document.getElementById("input-meeting-id").focus();
    setBtnDisabled("btn-disabled");
  }, []);

  const meetingIdHandler = (event) => {
    var { value } = event.target;
    console.log(value);
    if (value.length === 0) setBtnDisabled("btn-disabled");
    else setBtnDisabled("");
    // setMeetingId(value);
  };

  const joinRoom = () => {
    // axios({ method: "get", url: "/getroom" }).then((data) => {
    //   console.log(data.data);
    //   // setRoomID(data.data);
    //   navigate(`/meeting/${data.data}`);
    // });
  };
  return (
    <>
      <div className="header-container header-fixed">
        <ul className="nav">
          <li>
            <a href="/">join a meeting</a>
          </li>
          <li>
            <a href="/">Host a meeting</a>
          </li>
          <li>
            <a href="/">sign in</a>
          </li>
          <li>
            <a href="/" className="orange">
              sign up, it's free
            </a>
          </li>
        </ul>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="mini-layout">
            <h1 id="join-meeting">Join Meeting</h1>
            <form className="join-form">
              <div className="form-group">
                <label className="meeting-id" htmlFor="meeting-id">
                  Meeting ID or Personal Link Name
                </label>
                <input
                  id="input-meeting-id"
                  className="input-meeting-id"
                  placeholder="Enter Meeting ID or Personal Link Name"
                  onChange={(e) => meetingIdHandler(e)}
                ></input>
              </div>
              <div className="form-group">
                <div className="control terms">
                  {' By clicking "Join", you agree to our '}
                  <a href="/">Terms of Service</a>
                  {" and "}
                  <a href="/">Privacy Statement</a>
                </div>
              </div>
              <div className="form-group">
                <div className="control btn">
                  <a
                    href="/"
                    className={"join-btn " + btnDisabled}
                    onClick={() => joinRoom()}
                  >
                    Join
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <span>
          &copy;
          {" 2022 Zoom Video Communications, Inc. All rights reserved.  "}
          <a href="/">Privacy & Legal Policies</a>
        </span>
        <span className="action-btns">
          <div>Support</div>
          <div>English</div>
        </span>
      </div>
    </>
  );
};

export default Home;
