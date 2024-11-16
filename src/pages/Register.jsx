// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

// const Register = () => {
//   const { createUser } = useContext(AuthContext);
//   const handleRegister = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const name = formData.get("name");
//     const photo_url = formData.get("photo_url");
//     const email = formData.get("email");
//     const password = formData.get("password");
//     console.log(name, email, photo_url, password);
//     createUser(email, password)
//       .then((result) => {
//         // Signed up
//         const user = result.user;
//         e.target.reset();
//         console.log(user);
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.log(errorMessage);
//         // ..
//       });
//   };

//   return (
//     <div>
//       <div className="hero bg-base-200  min-h-screen">
//         <div className="hero-content flex-col">
//           <div className="card bg-[#fff] w-full  shrink-0  rounded-none p-4">
//             <form onSubmit={handleRegister} className="card-body lg:w-[500px]">
//               <h2 className="text-center font-bold mb-4 text-xl">
//                 Register your Accounts
//               </h2>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Your Full Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="enter your full name"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Photo URL</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="photo_url"
//                   placeholder="enter your photo url"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
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
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn bg-neutral text-base-200">
//                   Register
//                 </button>
//               </div>
//             </form>
//             <p className="text-center">
//               Already Have An Account ?{" "}
//               <Link to="/auth/login">
//                 <span className="text-green-600">Please Login</span>
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { Link } from "react-router-dom";

const SingUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(name, email, photo, password, terms);
    // reset error message
    setErrorMessage("");
    setSuccess(false);
    // reset error msg end
    if (!terms) {
      setErrorMessage(
        "Please accept our terms & condition first than Sign Up.."
      );
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters..");
      return;
    }
    const validPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
    if (!validPass.test(password)) {
      setErrorMessage(
        "Password should be at least 6 characters, one upper case, one lower case, one special character"
      );
      return;
    }

    //  create user through firebase auth
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        //  send verification email link for verify
        sendEmailVerification(auth.currentUser).then(() => {
          alert("Email Verification Link Send Successfully.. ");
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className="w-11/12 mx-auto p-4 mb-8 font-bold">
      <div className="hero bg-base-200 rounded-lg ">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-[#fff] w-full  shrink-0  rounded-none p-4">
            <form onSubmit={handleSignUp} className="card-body lg:w-[500px]">
              <h2 className="text-center font-bold mb-4 text-xl">
                Register your Accounts{" "}
              </h2>
              <div className="form-control font-bold">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your image url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="btn btn-sm absolute right-2 top-11 bg-slate-100 text-xl"
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control ">
                <label className="cursor-pointer label justify-start ">
                  <input
                    type="checkbox"
                    name="terms"
                    defaultChecked
                    className="checkbox checkbox-warning"
                  />
                  <span className="label-text ml-3">
                    Accept our terms & condition
                  </span>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-neutral rounded-none">
                  Register
                </button>
              </div>
            </form>
            {errorMessage && (
              <p className=" text-red-400 text-center mb-4 rounded-lg mx-auto p-2 bg-red-50 m-2">
                {errorMessage}
              </p>
            )}
            {success && (
              <p className="text-green-400 text-center mb-4 rounded-lg mx-auto p-2 bg-green-50 m-2">
                User Created Successfully..
              </p>
            )}
            <p className=" text-center mb-4 rounded-lg mx-auto p-2 bg-blue-50 m-2 ">
              Already have account ? Please{" "}
              <Link className=" p-2 rounded-lg text-green-500" to="/Login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
