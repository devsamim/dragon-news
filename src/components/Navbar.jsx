import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userLogo from "../../public/assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center">
      <div className="mt-4"></div>
      <div className="nav space-x-5 mt-4 text-[#706F6F]">
        <Link to="/">Home</Link>
        <Link>About</Link>
        <Link>Career</Link>
      </div>
      <div className="login flex items-center gap-4 mt-4">
        <div>
          <img src={userLogo} alt="" />
        </div>
        <div>
          <>
            {user && user?.email ? (
              <>
                <Link
                  className="bg-red-500 p-2 btn-sm text-base-100"
                  onClick={signOutUser}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="btn btn-neutral btn-sm p-2 w-28 text-base-200 outline-none rounded-none"
                >
                  Login
                </Link>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
