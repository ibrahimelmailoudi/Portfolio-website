import React, { useContext, useState, useEffect } from "react";
import { BsMoonStars, BsFillSunFill, BsHouse, BsInfoCircle, BsEnvelopeAt, BsBoxes } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import gsap from "gsap";
import barAnim from '../assets/Animation/menuV2.json'
import Lottie from "lottie-react";
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const Navbar = () => {
  const { theme, handleSwitchMode } = useContext(ThemeContext);
  const location = useLocation();
  const [isScrollingUp, setScrollingUp] = useState(false);
  const [isScrollingDown, setScrollingDown] = useState(false);
  const [atTop, setTop] = useState(true);
  const [activeLink, setActiveLink] = useState(location.pathname);

  const linkClass = theme === "dark"
    ? "text-gray-300 hover:text-white"
    : "text-black hover:text-gray-700";

  const setActiveLinkHandler = (path) => {
    setActiveLink(path);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollingDown(true);
        setScrollingUp(false);
      } else if (currentScrollY === 0) {
        setScrollingDown(false);
        setScrollingUp(false);
      } else {
        setScrollingDown(false);
        setScrollingUp(true);
      }
      lastScrollY = currentScrollY;
      setTop(currentScrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleIconClick = () => {
    handleSwitchMode();
  };

  // Custom styled tooltip that respects dark and light modes
  const CustomTooltip = styled(Tooltip)(({ theme }) => ({
    tooltip: {
      backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      boxShadow: theme.shadows[1],
      fontSize: 12,
    },
    arrow: {
      color: theme.palette.mode === 'dark' ? '#fff' : '#fff',
    },
  }));

  return (
    <div className={`nav-b rounded-b-[2rem] ${isScrollingUp && !isScrollingDown ? "sticky top-0 bg-opacity-0" : ""} z-20 flex items-center px-4 py-2 ${!isScrollingDown && atTop ? "" : "bg-opacity-0"}`}>
      <nav className="flex items-center p-2 w-full">
        <div className="sm:hidden md:flex lg:flex xl:flex 2xl:flex w-full mr-auto ml-auto justify-center">
          <div className={`${isScrollingUp ? "drop-shadow-md shadow-white" : ""} ${theme === "dark" ? "bg-3p drop-shadow-md" : "bg-white drop-shadow-md"} flex items-center gap-14 py-[0.8rem] px-28 rounded-full`}>
            <CustomTooltip title="Home" arrow placement="bottom">
              <span>
                <Link to="/" className={`${linkClass} ${activeLink === "/" ? "border-b-2 border-white" : ""}`} onClick={() => setActiveLinkHandler("/")}>
                  <BsHouse className="text-[1.28rem]" />
                </Link>
              </span>
            </CustomTooltip>
            <CustomTooltip title="Projects" arrow placement="bottom">
              <span>
                <Link to="/projects" className={`${linkClass} ${activeLink === "/projects" ? "border-b-2 border-white" : ""}`} onClick={() => setActiveLinkHandler("/projects")}>
                  <BsBoxes className="text-[1.28rem]" />
                </Link>
              </span>
            </CustomTooltip>
            <CustomTooltip title="About" arrow placement="bottom">
              <span>
                <Link to="/about" className={`${linkClass} ${activeLink === "/about" ? "border-b-2 border-white" : ""}`} onClick={() => setActiveLinkHandler("/about")}>
                  <BsInfoCircle className="text-[1.28rem]" />
                </Link>
              </span>
            </CustomTooltip>
            <CustomTooltip title="Contact" arrow placement="bottom">
              <span>
                <Link to="/contact" className={`${linkClass} ${activeLink === "/contact" ? "border-b-2 border-white" : ""}`} onClick={() => setActiveLinkHandler("/contact")}>
                  <BsEnvelopeAt className="text-[1.28rem]" />
                </Link>
              </span>
            </CustomTooltip>
          </div>
        </div>

        {atTop && (
          <div className={`${theme === "dark" ? "text-slate-300 bg-3p border-slate-300 shadow-white drop-shadow-md transition-all ease-in duration-300 hover:text-white hover:border-white" : "text-yellow-300 hover:border-yellow-300 bg-white bg-opacity-100 transition-all ease-in duration-300"} flex items-center ml-auto rounded-full shadow-sm drop-shadow shadow-white border p-2 border-solid cursor-pointer`} onClick={handleIconClick} aria-label="Toggle Theme">
            <CustomTooltip title="Dark" arrow placement="left">
              <span>
                {theme === "dark" ? <BsMoonStars className="text-lg" /> : <BsFillSunFill className="text-lg" />}
              </span>
            </CustomTooltip>
          </div>
        )}

        <div className="sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden flex items-center w-full justify-end p-3">
          <CustomTooltip title="Show menu" arrow placement="bottom">
            <span className="flex items-center rounded-lg border border-solid p-2 hover:text-black hover:bg-white cursor-pointer">
              <FaBars className="text-2xl" />
              <Lottie animationData={barAnim} />
            </span>
          </CustomTooltip>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
