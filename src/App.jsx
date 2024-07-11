import NavBar from './components/Navbar/NavBar'
import Intro from './components/Home/Intro'
import Why from './components/Home/Why'
import Hooks from './components/Home/Hooks'
import User from './components/Home/User'
import Surveyor from './components/Home/Surveyor'
import Faqs from './components/Home/Faqs'
import Footer from './components/Footer/Footer'
import Cases from './components/Home/Cases'
import Distribution from './components/Home/Distribution'
import Invite from './components/Home/Invite'
import SurveyBuilding from './components/Home/SurveyBuilding'
import SharingThoughts from './components/Home/SharingThoughts'
import DecentralizedAction from './components/Home/DecentralizedAction'
import SDK from './components/Home/SDK'
import Roadmap from './components/Home/Roadmap'
import Tokonomics from './components/Home/Tokonomics'
import Popup from './components/Home/Popup'

function App() {

  return (
    <div className='font-montserrat'>
      <div className='xl:max-w-[1300px] mx-auto '>
        <NavBar />
        <Intro />
        <div id='why' className='p-1'>
          <Why />
        </div>
        <Surveyor/>
        <div id='SurveyBuilding' className='p-1'>
        <SurveyBuilding/>
        </div>
        <div id='EarnToken' className='p-1'>
        <SharingThoughts />
        </div>
        <Hooks />
      </div>
      <div className='max-w-[1300px] mx-auto'>
      <div id='Distribution' className='p-1'>
        <Distribution />
      </div>
      <DecentralizedAction/>
      <SDK/>
      <Cases/>
      <Roadmap/>
      <Tokonomics/>
      </div>
      <div className=''>
        <div className='max-w-[1300px] mx-auto py-1'>
          <Faqs />
        </div>
      </div>
      <div className='bg-[#5831C8]'>
        <Invite/>
      </div>
      <div  >
        <div className='max-w-[1300px] mx-auto py-1'>
          <Footer />
        </div>
      </div>
      <Popup/>
    </div>
  )
}

export default App
