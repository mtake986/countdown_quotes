import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/Auth/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  let {uid} = useParams();

  const { handleLogout } = useAuthContext();

  return (
    <div
      className="cursor-pointer hover:opacity-50 duration-200 text-2xl text-red-500 bg-red-50 p-3 rounded-lg"
      onClick={() => {
        handleLogout();
        navigate("/");
      }}
    >
      logout, {uid}
    </div>
  );
}

export default Profile