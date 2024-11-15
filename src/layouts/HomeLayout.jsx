import React from "react";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import SocialLogin from "../components/SocialLogin";
import FlowUs from "../components/FlowUs";
import Qzone from "../components/Qzone";
import Add from "../components/Add";
import LeftNews from "../components/LeftNews";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import { Outlet } from "react-router-dom";

const HomeLayouts = () => {
  return (
    <div className="font-Poppins">
      <Header></Header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-12 gap-4 mt-6">
          <aside className="col-span-3 text-xl font-bold w-11/12 mx-auto ">
            <Category></Category>
            <LeftNews></LeftNews>
          </aside>
          <news className="col-span-6">
            <section>
              <Outlet></Outlet>
            </section>
          </news>
          <aside className="col-span-3">
            <SocialLogin></SocialLogin>
            <FlowUs></FlowUs>
            <Qzone></Qzone>
            <Add></Add>
          </aside>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayouts;
