import React, { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  const visitedPage = pathname.toLowerCase();
  const [visible, setVisible] = useState(true);
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;
      const isTop = currentScrollPos < 0; // Adjust as needed

      setVisible(isTop || scrollingUp);
      prevScrollPos = currentScrollPos;

      if (currentScrollPos > 0) {
        setScrolledFromTop(true);
      } else {
        setScrolledFromTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavbarData = [
    {
      id: 0,
      title: "Home",
      path: "/",
      childItem: [
        {
          id: "Why",
          title: "Why SurveyBull?",
          path: "/",
          subtitle: "reasons to choose surveybull",
        },
        {
          id: "Earn",
          title: "Earn Token",
          path: "/",
          subtitle: "earn tokens with your data",
        },
        {
          id: "Distribution",
          title: "Distribution",
          path: "/",
          subtitle: "know your share",
        },
        {
          id: "Survey",
          title: "Survey Building",
          path: "/",
          subtitle: "Crafting made easy",
        },
      ],
    },
    {
      id: 1,
      title: "Roadmap",
      path: "/roadmap",
      childItem: [],
    },
    {
      id: 2,
      title: "Pricing",
      path: "/pricing",
      childItem: [],
    },
    {
      id: 3,
      title: "Survey Creation",
      path: "/surveycreation",
      childItem: [],
    },
    {
      id: 4,
      title: "FAQs",
      path: "/faqs",
      childItem: [],
    },
  ];

  return (
    <div className="w-full mx-auto">
      <div
        className={`transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:block hidden ${
          scrolledFromTop &&
          " bg-[#FFFFFF40] backdrop-blur-md z-50 shadow-[0px_10px_40px_0px_rgba(19,35,55,0.15)]"
        }  fixed top-0 w-full `}
      >
        <DesktopNavbar NavbarData={NavbarData} visitedPage={visitedPage} />
      </div>
      <div
        className={`md:hidden block fixed top-0 w-full ${
          scrolledFromTop &&
          " bg-[#FFFFFF40] backdrop-blur-md z-50 shadow-[0px_10px_40px_0px_rgba(19,35,55,0.15)]"
        } transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <MobileNavbar NavbarData={NavbarData} visitedPage={visitedPage} />
      </div>
    </div>
  );
};

export default NavBar;
