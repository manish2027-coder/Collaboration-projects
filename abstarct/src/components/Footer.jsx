import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex">
        {/* Main Content */}
        <div className="flex flex-wrap justify-between w-[60%]">
          {/* Abstract Section */}
          <div className="w-full sm:w-auto mb-8 sm:mb-0">
            <h3 className="text-lg font-bold text-[22px] mb-4">Abstract</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:">
                  Start Trial
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="w-full sm:w-auto mb-8 sm:mb-0">
            <h3 className="text-lg font-bold text-[22px] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Release Notes
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="w-full sm:w-auto mb-8 sm:mb-0">
            <h3 className="text-lg font-bold text-[22px] mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Dribbble
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Podcast
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full sm:w-auto">
            <h3 className="text-lg font-bold text-[22px] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  Legal
                </a>
              </li>
            </ul>
            <p className="mt-4 text-white">Contact Us</p>
            <p className="text-white">info@abstract.com</p>
          </div>
        </div>

        <div className="bg-black text-white py-6 justify-start w-[40%]">
      <div className="max-w-sm mx-auto flex flex-col items-center">
        {/* Logo */}
        

        {/* Text Section */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; Copyright 2024</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
