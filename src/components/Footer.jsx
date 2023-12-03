import React from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0D2436] font-roboto mx-auto min-h-max p-10">
      <section className="container mx-auto flex justify-between">
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="">
             <input
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-4 pr-3 w-full py-3 focus:outine-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md: py-4 "
              type="email"
              placeholder="Your Email"
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3  md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Subscribe
          </button>
        </div>
        <div className="w-12 h-10 bg-white"></div>
      </section>
      <section className="flex justify-between align-center text-[#959EAD] mt-10">
        <div>
          <div>
            <img className="w-16" src={Logo} alt="logo" />
          </div>
          <div className="mt-8">
          <p> Build a modern and creative <br /> website with moonfo </p>
          </div>
        </div>
        <div>
          <ul>
            <li>Product</li>
            <li>Landingpage</li>
            <li>Features</li>
            <li>Documentation</li>
            <li>Referral Program</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Services</li>
            <li>Documentation</li>
            <li>Design</li>
            <li>Themes</li>
            <li>Illustrations</li>
            <li>UI Kit</li>
          </ul>
        </div>
        <div><ul>
          <li>Company</li>
          <li>About</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
          <li>Careers</li>
        </ul>
        </div>
        <div>
          <ul>
            <li>More</li>
            <li>Documentation</li>
            <li>License</li>
            <li>Changelog</li>
            <li></li>
          </ul>
        </div>
      </section>
      <section className="flex justify-center align-center h-10">
        <p className="mt-8">Copyright © 2019. Moonfo with love.</p>

      </section>
    </footer>
  );
};

export default Footer;
