import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { AuthContext } from "./AuthContext";
import Swal from "sweetalert2";
import "./Reg.css";

const Registration = () => {
  const navigate = useNavigate("/");
  const { Auth, setAuth } = useContext(AuthContext);

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");

  const clientId =
    "67295596488-qjg965oe3oiirnmgcpcoeovccan8mnkj.apps.googleusercontent.com";
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
    Swal.fire({
      title: "<strong> Welcome Back </strong>",
    });
    setAuth(true);
    navigate("/");
  };

  const onFailureSuccess = (res) => {
    console.log("Login Failed", res);
  };

  const onSignoutSuccess = () => {
    setShowLoginButton(true);
    setShowLogoutButton(false);
  };

  const HandleSignIn = (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.Email === Email && u.Password === Password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
      setAuth(true);
      setErrorMsg("");
      setEmail("");
      setPassword("");
    } else {
      setErrorMsg("Invalid email or password");
    }
  };

  return (
    <div id="signInCon" className="container1 mt-5 mb-5 mx-5">
      <div className="IN row justify-content-start">
        <div className="col-lg-5 col-md-6 col-sm-8">
          <Form
            className="d-flex flex-column mt-5 mb-5 mx-5"
            onSubmit={HandleSignIn}
          >
            <h1 className=" Sign fw-bold text-center mb-5">Sign In</h1>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email Address"
                style={{
                  boxShadow: "3px 3px 3px lightgrey",
                  fontSize: "1.2rem",
                }}
                value={Email}
                autoComplete="on"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                className="mb-2"
                type="password"
                placeholder="Password"
                style={{
                  boxShadow: "3px 3px 3px lightgrey",
                  fontSize: "1.2rem",
                }}
                value={Password}
                autoComplete="on"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              {ErrorMsg && <p style={{ color: "red" }}>{ErrorMsg}</p>}

              <Link style={{ textDecoration: "none" }} to="*">
                Forgot Password?
              </Link>
            </Form.Group>
            <Button
              className="mb-2"
              style={{ backgroundColor: "#363c76", fontSize: "1.2rem" }}
              type="submit"
            >
              LOGIN
            </Button>
            <p>
              don't have an account?{" "}
              <Link style={{ textDecoration: "none" }} to="/SignUp">
                Sign Up
              </Link>
            </p>
            <Form.Text className="mb-3 mt-3 text-muted text-center">
              Or
            </Form.Text>
            <div className="d-flex justify-content-center">
              {showLoginButton ? (
                <GoogleLogin
                  clientId="67295596488-qjg965oe3oiirnmgcpcoeovccan8mnkj.apps.googleusercontent.com"
                  buttonText="Login with google"
                  onSuccess={onLoginSuccess}
                  onFailure={onFailureSuccess}
                  cookiePolicy={"single_host_origin"}
                />
              ) : null}
              {showLogoutButton ? (
                <GoogleLogout
                  clientId="67295596488-qjg965oe3oiirnmgcpcoeovccan8mnkj.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={onSignoutSuccess}
                ></GoogleLogout>
              ) : null}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
