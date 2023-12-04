import React from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
    <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
       <div>
          <div>
            <img className="w-16" src={Logo} alt="logo" />
          </div>
          <section className="col-span-5 md:col-span-4 lg:col-span-2 text-dark-light font-bold md:text-lg">
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm"> Build a modern and creative website with us.</p>
          </section>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2 ml-auto">
        <h3 className="text-dark-light font-bold md:text-lg">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>Landingpage</li>
            <li>Features</li>
            <li>Documentation</li>
            <li>Referral Program</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
        <h3 className="text-dark-light font-bold md:text-lg">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>Documentation</li>
            <li>Design</li>
            <li>Frontend Development</li>
            <li>Backend services</li>
            <li>Dev-ops</li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2">
        <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
          <li>About</li>
          <li>Terms</li>
          <li>Privacy Policy</li>
          <li>Careers</li>
        </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
        <h3 className="text-dark-light font-bold md:text-lg">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base" >
            <li>Documentation</li>
            <li>License</li>
            <li>Changelog</li>
            <li></li>
          </ul>
        </div>
        <p className="font-bold italic text-dark-light">Copyright © 2023. Blog App.</p>
        </footer>
    </section>
  );
};

export default Footer;
