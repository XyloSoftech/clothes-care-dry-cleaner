
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div  className={`sticky top-0 z-50 lg:relative lg:z-auto`}>
      <header >
        <div className="relative z-20  bg-[#0890F3]">
          <div className="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
            <div className="flex items-center justify-between">
              <div className="relative z-30">
                <a href="#">
                  <img
                    src="https://tailus.io/sources/blocks/navigation-layout/preview/images/logo.svg"
                    alt="logo-tailus"
                    className="w-32"
                  />
                </a>
              </div>

              <div className="flex items-center justify-end  lg:border-l-0">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                />
                <label
                  htmlFor="hamburger"
                  className={`peer-checked:hamburger block relative z-30 p-6 -mr-6 cursor-pointer lg:hidden ${
                    isOpen ? "peer-checked:hamburger-close" : ""
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                  <div
                    aria-hidden="true"
                    className={`m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300 transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  ></div>
                  <div
                    aria-hidden="true"
                    className={`m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300 transform ${
                      isOpen ? "-rotate-45" : ""
                    }`}
                  ></div>
                </label>

                <div
                  className={`peer-checked:translate-y-0 fixed inset-0 h-screen w-screen translate-y-[-100%] border-b 
                 bg-[#0890F3]
                  } lg:border-b-0 lg:h-auto lg:w-auto lg:static lg:shadow-none lg:translate-y-0 z-20`}
                >
                  <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                    <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                      <li>
                        <Link to="/">
                          <span className="text-white  text_lato relative lg:text-base  font-semibold">
                            Home
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Services">
                          <span className="text-white  text_lato relative lg:text-base  font-semibold">
                            Prices & Services
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          <span className="text-white  text_lato relative lg:text-base  font-semibold">
                            Order Details
                          </span>
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/faq">
                          <span className="text-white text_lato relative lg:text-base  font-semibold">
                            How it works
                          </span>
                        </Link>
                      </li> */}
                    </ul>

                    <Link to="/contact">
                      <div className="py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:py-0 lg:pr-0 lg:pl-6">
                        <a
                          href="#"
                          className="block px-6 py-3 rounded-lg bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white"
                        >
                          Book Now
                        </a>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
