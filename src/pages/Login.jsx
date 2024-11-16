// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";
// import { useState } from "react";

// const Login = () => {
//   const { signInUser } = useContext(AuthContext);
//   const [success, setSuccess] = useState(false);
//   const [loginError, setLoginError] = useState(false);
//   const navigate = useNavigate();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     setSuccess(false);
//     setLoginError("");
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     signInUser(email, password)
//       .then((result) => {
//         const user = result.user;
//         e.target.reset();
//         navigate("/");

//         console.log(user);
//       })
//       .catch((error) => {
//         setLoginError(errorMessage);
//       });
//   };
//   return (
//     <div>
//       <div className="hero bg-base-200  min-h-screen">
//         <div className="hero-content flex-col">
//           <div className="card bg-[#fff] w-full  shrink-0  rounded-none p-4">
//             <form onSubmit={handleLogin} className="card-body lg:w-[500px]">
//               <h2 className="text-center font-bold mb-4 text-xl">
//                 Login your Accounts
//               </h2>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   className="input input-bordered"
//                   required
//                 />
//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn bg-neutral text-base-200">Login</button>
//               </div>
//             </form>
//             <p className="text-center">
//               Dont’t Have An Account ?{" "}
//               <Link to="/auth/register">
//                 <span className="text-red-500">Register</span>
//               </Link>
//             </p>
//           </div>
//           <div>
//             {success && (
//               <p className="text-green-400 text-center mb-4 rounded-lg mx-auto p-2 bg-green-50 m-2">
//                 Login Successfully..
//               </p>
//             )}
//             {loginError && (
//               <p className="text-red-400 text-center mb-4 rounded-lg mx-auto p-2 bg-red-50 m-2">
//                 {loginError}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const emailRef = useRef();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // rest status
    setSuccess(false);
    setLoginError("");
    // reset end status

    // login crediantional in fire base
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (!result.user.emailVerified) {
          alert(
            "Email verification pending! please verify your email address!"
          );
          return;
        }
        setSuccess(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
    //console.log(email, password);
  };
  const handleForgetPassword = () => {
    const emailRefVal = emailRef.current.value;
    if (!emailRefVal) {
      alert("Email not Exit please check and try..");
      return;
    } else {
      sendPasswordResetEmail(auth, emailRefVal)
        .then(() => {
          alert("Reset link Send Successfully please check your email..");
        })
        .catch((error) => {
          const errormessage = error.message;
        });
    }
  };
  return (
    <div className="w-11/12 mx-auto p-4 mb-8 font-bold">
      <div className="hero bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-center p-2 ">Sign In</h2>
          </div>
          <div className="card bg-base-100  lg:w-[500px] rounded-none shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label onClick={handleForgetPassword} className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-red-300"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="  btn bg-neutral text-base-200 rounded-none">
                  Login
                </button>
              </div>
              <div className="flex gap-x-2 p-2">
                <button className="btn bg-neutral text-base-200">
                  Login
                  <FcGoogle className="ml-2 text-xl" />
                </button>
              </div>
            </form>
            {success && (
              <p className="text-green-400 text-center mb-4 rounded-lg mx-auto p-2 bg-green-50 m-2">
                Login Successfully..
              </p>
            )}
            {loginError && (
              <p className="text-red-400 text-center mb-4 rounded-lg mx-auto p-2 bg-red-50 m-2">
                {loginError}
              </p>
            )}
            <p className=" text-center mb-8 rounded-lg mx-auto p-2 bg-blue-50 m-2">
              New user? Please{" "}
              <Link className=" p-2 rounded-lg" to="/auth/register">
                <span className="text-red-500">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
