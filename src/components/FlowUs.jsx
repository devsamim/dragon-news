import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";

const FlowUs = () => {
  return (
    <div>
      <h2 className="mt-6 mb-4 font-semibold">Find Us on</h2>
      <div>
        <div className="join flex join-vertical mb-4 *:bg-base-200">
          <button className="btn justify-start join-item">
            <CiFacebook className="text-blue-900 text-2xl" />
            Facebook
          </button>
          <button className="btn justify-start join-item">
            <AiFillTwitterCircle className="text-blue-300 text-2xl" /> Twitter
          </button>
          <button className="btn justify-start join-item">
            <IoLogoInstagram className="text-2xl text-red-400" /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlowUs;
