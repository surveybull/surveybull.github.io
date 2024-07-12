import Home from './components/Home/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Why from './components/Home/Why'
import Roadmap from './components/Roadmap/Roadmap'
import Pricing from './components/Pricing/Pricing'
import Blog from './components/Blog/Blog'
import FAQs from './components/FAQs/FAQs'
import './App.css';
function App() {

  return (
    
    <Router>
      <div className='flex flex-col'>
           <Routes>
           <Route path='/' Component={Home}></Route>
           <Route path='/roadmap' Component={Roadmap}></Route>
           <Route path='/pricing' Component={Pricing}></Route>
           <Route path='/blog' Component={Blog}></Route>
           <Route path='/faqs' Component={FAQs}></Route>
           </Routes>
           <Footer/>
      </div>
    </Router>
  
  )
}

export default App
