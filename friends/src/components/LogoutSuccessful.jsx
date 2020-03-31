import React, { useEffect } from "react";

const LogoutSuccessful = () => {
  const logout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    logout();
  }, []);

  return (
    <div>
      <h1>Thanks for visiting Friends List</h1>
      <h2>You have successfully logged out!</h2>
    </div>
  );
};

export default LogoutSuccessful;
