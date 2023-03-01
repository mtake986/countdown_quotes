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
          <IconButton
            onClick={handleLogout}
            className="text-2xl cursor-pointer"
          >
            <FaRegUserCircle />
          </IconButton>
        </Tooltip>
      ) : (
        <div
          onClick={handleGoogleLogin}
          className="text-lg font-semibold rounded-md text-sky-50 cursor-pointer flex items-center gap-1 bg-sky-400 py-1 px-3 hover:opacity-70 duration-200"
        >
          Login
        </div>
      )}
    </>
  );
};

export default Login;
