import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold">Login With</h2>
      <div className="flex flex-col mt-8 gap-2">
        <button className="btn">
          <FcGoogle className="text-xl" /> Login with Google
        </button>
        <button className="btn">
          <FaGithub className="text-xl" />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
