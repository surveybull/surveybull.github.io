import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const NavBar = ({ visitedPage }) => {
  const NavbarData = [
    {
      id: 0,
      title: "Home",
      path: "/",
      childItem: [
        { id: 0, title: "Why SurveyBull?", path: "/", subtitle: "reasons to choose surveybull" },
        { id: 1, title: "Survey Building", path: "/", subtitle: "Crafting made easy" },
        { id: 2, title: "Earn Token", path: "/", subtitle: "earn tokens with your data" },
        { id: 3, title: "Distribution", path: "/", subtitle: "know your share" },
      ],
    },
    {
      id: 1,
      title: "Roadmap",
      path: "/roadmap",
      childItem: [
        { id: 0, title: "Why SurveyBull?", path: "/", subtitle: "reasons to choose surveybull" },
        { id: 1, title: "Survey Building", path: "/", subtitle: "Crafting made easy" },
        { id: 2, title: "Earn Token", path: "/", subtitle: "earn tokens with your data" },
        { id: 3, title: "Distribution", path: "/", subtitle: "know your share" },
      ],
    },
    {
      id: 2,
      title: "Pricing",
      path: "/pricing",
      childItem: [],
    },
    {
      id: 3,
      title: "Blog",
      path: "/blog",
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
    <div className="mx-auto w-full">
      <div className="md:block hidden">
        <DesktopNavbar NavbarData={NavbarData} visitedPage={visitedPage} />
      </div>
      <div className="md:hidden block">
        <MobileNavbar NavbarData={NavbarData} />
      </div>
    </div>
  );
};

export default NavBar;
