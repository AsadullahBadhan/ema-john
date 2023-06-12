import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signUpwithEmail } = useAuth();
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("Password do not match");
        }

        try {
            setError("");
            await signUpwithEmail(
                emailRef.current.value,
                passwordRef.current.value
            );
        } catch (err) {
            console.log(err);
            setError("Failed to Sign up");
        }
    }

    return (
        <div className="form-container">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="login-form">
                <h2>Sign Up</h2>

                <form onSubmit={handleSubmit}>
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

                    <div className="input-container">
                        <input
                            type="password"
                            name="password"
                            ref={confirmPasswordRef}
                            required
                        />
                        <label htmlFor="password">
                            <span className="label-name">Confirm Password</span>
                        </label>
                    </div>

                    <button type="submit" className="login">
                        Sign Up
                    </button>
                </form>

                <p className="signup-text">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
