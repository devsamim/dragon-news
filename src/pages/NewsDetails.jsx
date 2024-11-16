import React from "react";
import Navbar from "../components/Navbar";
import SocialLogin from "../components/SocialLogin";
import FlowUs from "../components/FlowUs";
import Qzone from "../components/Qzone";
import Add from "../components/Add";
import { useLoaderData } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <div className="flex justify-between">
          <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
            <section className="col-span-9">
              <h2 className="font-semibold text-xl ">Dragon News</h2>
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={news?.image_url}
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{news?.title}</h2>
                  <p>{news?.details}</p>
                  <div className="card-actions">
                    <Link
                      to={`/category/${news?.category_id}`}
                      className="btn btn-sm bg-red-500 rounded-none text-base-100"
                    >
                      <IoIosArrowRoundBack className="base-100 text-xl" /> Back
                      to Category
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <aside className="col-span-3">
              <SocialLogin></SocialLogin>
              <FlowUs></FlowUs>
              <Qzone></Qzone>
              <Add></Add>
            </aside>
          </main>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
