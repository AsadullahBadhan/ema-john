import React, { useRef, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signUpwithEmail } = useAuth();
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Password do not match');
    }

    try {
      setError('');
      await signUpwithEmail(emailRef.current.value, passwordRef.current.value)
    } catch (err) {
      console.log(err);
      setError('Failed to Sign up')
    }
  }

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" ref={emailRef} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={passwordRef} />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" name="confirm-password" ref={confirmPasswordRef} />

        <button type="submit">Sign Up</button>
      </form>
      <div>
        <p>Already have an account? Log In</p>
      </div>
    </>
  );
};

export default SignUp;

