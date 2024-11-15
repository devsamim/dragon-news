import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex gap-2 items-center bg-base-200 p-2">
        <p className="bg-[#d72050] p-2 text-base-100 w-[130px]">Latest News</p>

        <Marquee className="space-x-10 " pauseOnHover autoFill>
          <Link to="news">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
            quia.
          </Link>
          <Link to="news">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
            quia.
          </Link>
          <Link to="news">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
            quia.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
