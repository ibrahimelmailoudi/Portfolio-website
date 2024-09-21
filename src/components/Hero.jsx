import React, { useEffect, useRef, useContext, useState } from "react";
import image from "../assets/Logo/ibrahim_icon.png";
import {
  BsCaretDownFill,
  BsFillPatchCheckFill,
  BsInstagram,
} from "react-icons/bs";
import Typed from "typed.js";
import Lottie from "lottie-react";
import devAnimation from "../assets/Animation/Animation - 1719798504786.json";
import mouseAnimation from "../assets/Animation/Animation - 1719841389869.json";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import gsap from "gsap";
import { ThemeContext } from "../Context/ThemeContext";
import background1 from '../assets/background/pexels-apasaric-325185.jpg';
import Tooltip from '@mui/material/Tooltip';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const typedRef = useRef(null);
  const mouseAnimationRef = useRef(null);
  const [showMouseAnimation, setShowMouseAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setShowMouseAnimation(true);
        if (mouseAnimationRef.current) {
          gsap.to(mouseAnimationRef.current, { scale: 1, duration: 1, y: 0 });
        }
      } else {
        if (mouseAnimationRef.current) {
          gsap.to(mouseAnimationRef.current, { scale: 0, duration: 1, y: 20 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    typedRef.current = new Typed(".element", {
      strings: [
        "Welcome To my Portfolio website",
        "Hope you enjoy exploring",
        "my work experience",
      ],
      typeSpeed: 30,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".element",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    if (mouseAnimationRef.current) {
      gsap.fromTo(
        mouseAnimationRef.current,
        { scale: 0, y: 20 },
        { scale: 1, y: 0, duration: 1, delay: 0.5 }
      );
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".social-media, .devLo",
      { scale: 0, y: 20 },
      { scale: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  const linkedClass = `opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110 ${
    theme === "dark" ? "border-white text-white" : "border-black text-black"
  }`;

  return (
    <>
    <div
      className={`relative flex flex-col items-center p-4 mb-4 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div className="sm:p-14 md:p-12 lg:p-10 xl:p-10 relative flex flex-col items-center">
        <div className="image-container rounded-full relative flex justify-center transition-all duration-300">
          <BsCaretDownFill className="absolute bottom-full left-1/2 transform mb-2 -translate-x-1/2 text-2xl" />
          <img
            src={image}
            alt="Ibrahim"
            className="hero-image animate-pulse lg:w-32 cursor-pointer rounded-full w-20 sm:w-28"
          />
        </div>
        <BsFillPatchCheckFill className="text-blue-400 mt-4 text-base" />
        <div className="flex flex-nowrap w-full flex-col gap-5 mt-4">
          <div className="social-media flex flex-row items-center justify-center gap-4">
            <Tooltip title="Facebook" arrow placement="left">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`border border-solid rounded-full p-1.5 ${linkedClass}`}
              >
                <FaFacebookF />
              </a>
            </Tooltip>
            <Tooltip title="Instagram" arrow placement="top">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`border border-solid rounded-full p-1.5 ${linkedClass}`}
              >
                <BsInstagram />
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn" arrow placement="top">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`border border-solid rounded-full p-1.5 ${linkedClass}`}
              >
                <FaLinkedinIn />
              </a>
            </Tooltip>
            <Tooltip title="GitHub" arrow placement="right">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`border border-solid rounded-full p-1.5 ${linkedClass}`}
              >
                <FaGithub />
              </a>
            </Tooltip>
          </div>
          <div className="text-center max-w-[75rem] mt-4 lg:mt-0 sm:text-sm md:text-base lg:text-base">
            <h4 className="font-Raleway">
              I specialize in building modern, responsive websites that bring
              your ideas to life. With a passion for coding and a knack for
              design, I create seamless digital experiences that are both
              visually appealing and highly functional. Let's transform your
              vision into reality.
            </h4>
          </div>
        </div>
      </div>
      <div>
        <h1 className="h-[8rem] text-xl sm:text-2xl lg:text-4xl font-bold">
          <span className="element font-SpaceGrotesk"></span>
        </h1>
      </div>
      <div>
        {showMouseAnimation && (
          <div
            ref={mouseAnimationRef}
            className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 hidden lg:flex xl:flex md:flex w-8"
          >
            <Lottie animationData={mouseAnimation} />
          </div>
        )}
      </div>
    </div>
         <img src={background1} alt="background" className="absolute top-0 right-0 -z-10 opacity-30 object-cover"/>

   </>
  );
};

export default Hero;
