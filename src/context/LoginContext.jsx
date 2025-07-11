import React, { createContext, useState } from 'react';

// Create the context
export const LoginCTX = createContext();

// Create the provider component
export const LoginContext = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <LoginCTX.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginCTX.Provider>
  );
};