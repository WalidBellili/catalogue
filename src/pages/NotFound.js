import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <div>
      <p>Error</p>
      <button onClick={handleButtonClick}>Back to home</button>
    </div>
  );
};

export default NotFound;
