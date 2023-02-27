import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { FiLogIn } from "react-icons/fi";
import { IconButton, Tooltip } from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";

const Login = () => {
  const { handleGoogleLogin, loginUser, handleLogout } = useAuthContext();

  return (
    <>
      {loginUser ? (
        <Tooltip title="Profile">
          <IconButton>
            <FaRegUserCircle
              onClick={handleLogout}
              className="text-2xl cursor-pointer"
            />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Login">
          <IconButton>
            <FiLogIn
              onClick={handleGoogleLogin}
              className="text-2xl cursor-pointer"
            />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default Login;
