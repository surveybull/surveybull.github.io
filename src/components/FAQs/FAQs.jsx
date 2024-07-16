import React from 'react'
import NavBar from '../Navbar/NavBar'
import FAQsBg from "../../assets/background/FAQsBg.jpg"
import Header from './Header'
import Questions from './Questions'
import QuestionsBg from "../../assets/background/QuestionsBg.jpg"
function FAQs() {
  return (
    <>
    <div
        style={{
          backgroundImage: `url(${FAQsBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <NavBar visitedPage={"FAQs"} />
          <Header/>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${QuestionsBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Questions/>
        </div>
      </div>
      </>
  )
}

export default FAQs