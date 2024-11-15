import React from "react";
import swimming from "../../public/assets/swimming.png";
import classImg from "../../public/assets/class.png";
import playGround from "../../public/assets/playground.png";

const Qzone = () => {
  return (
    <div className="mt-4 mb-2 bg-base-300">
      <h1 className="mt-6 font-semibold text-xl  p-2 mb-8">Q - zone</h1>
      <div className="p-4 mb-4">
        <img src={swimming} alt="" />
      </div>
      <div className="p-4 mb-4">
        <img src={classImg} alt="" />
      </div>
      <div className="p-4 mb-4">
        <img src={playGround} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
