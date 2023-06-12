import React, { useRef, useState } from "react";
import "./Login.css";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { loginWithEmail, googleSignIn, facebookSignIn } = useAuth();
    const navigate = useNavigate();

    const [message, setMessage] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        try {
            setMessage("");
            await loginWithEmail(
                emailRef.current.value,
                passwordRef.current.value
            );
            navigate("/");
        } catch (error) {
            setMessage(`Failed to Log in ${error}`);
        }
    }

    async function handleGoogleSignIn() {
        try {
            await googleSignIn();
            navigate("/");
        } catch (err) {
            console.log(err);
            setMessage("Failed to Login with google");
        }
    }

    return (
        <div className="form-container">
            {message && (
                <div className="message-card">
                    <p>{message}</p>
                    <span
                        className="close-message"
                        onClick={() => setMessage("")}
                    >
                        X
                    </span>
                </div>
            )}
            <div className="login-form">
                <h2>Login</h2>

                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                            required
                        />
                        <label htmlFor="email">
                            <span className="label-name">Email</span>
                        </label>
                    </div>

                    <div className="input-container">
                        <input
                            type="password"
                            name="password"
                            ref={passwordRef}
                            required
                        />
                        <label htmlFor="password">
                            <span className="label-name">Password</span>
                        </label>
                    </div>

                    <div className="login-options">
                        <div>
                            <input type="checkbox" name="remember-me" />
                            <label
                                htmlFor="remember-me"
                                className="remember-label"
                            >
                                Remember Me
                            </label>
                        </div>
                        <Link to="/reset" className="reset">
                            forgot password?
                        </Link>
                    </div>

                    <button type="submit" className="login">
                        Login
                    </button>
                </form>

                <p className="signup-text">
                    Don't have an account?{" "}
                    <Link to="/signup">Create an account.</Link>
                </p>
            </div>
            <div className="divider">
                <hr />
                <p>Or</p>
                <hr />
            </div>
            <div className="oauth-container">
                <button onClick={facebookSignIn}>
                    <IconContext.Provider
                        value={{ color: "#3076ff", size: "2rem" }}
                    >
                        <span className="auth-icon">
                            <BsFacebook />
                        </span>
                    </IconContext.Provider>
                    Continue with Facebook
                </button>
                <button onClick={handleGoogleSignIn}>
                    <IconContext.Provider value={{ size: "2rem" }}>
                        <span className="auth-icon">
                            <FcGoogle />
                        </span>
                    </IconContext.Provider>
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
