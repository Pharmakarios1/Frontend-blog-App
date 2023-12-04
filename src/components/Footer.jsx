import React from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0D2436] font-roboto mx-auto min-h-max p-10">
      <section className="flex justify-between align-center text-[#959EAD]">
        <div>
          <div>
            <img className="w-16" src={Logo} alt="logo" />
          </div>
          <div className="mt-8">
          <p> Build a modern and creative <br /> website with us. </p>
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
