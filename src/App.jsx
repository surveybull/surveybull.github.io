import Home from "./components/Home/Home";
import {  Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Why from "./components/Home/Why";
import Roadmap from "./components/Roadmap/Roadmap";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import FAQs from "./components/FAQs/FAQs";
import NavBar from "./components/Navbar/NavBar";
import './App.css';
function App() {
  return (
    <>
      <NavBar />
      <div className="no-scrollbar">
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/roadmap" Component={Roadmap}></Route>
          <Route path="/pricing" Component={Pricing}></Route>
          <Route path="/surveycreation" Component={Blog}></Route>
          <Route path="/faqs" Component={FAQs}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
