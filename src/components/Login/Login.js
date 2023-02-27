import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const { hi } = useAuth();

  return (
    <>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">Log In</button>
      </form>
      <div>
        <p>Need An account? Sign Up</p>
      </div>
    </>
  );
};

export default Login;

