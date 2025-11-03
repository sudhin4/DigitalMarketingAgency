import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './assets/Component/Header/Header.jsx'
import Mainpage from './assets/Component/Mainpage/Mainpage.jsx'
import Servicecomponent, { Servicecomponenttwo } from './assets/Component/servicesection/Servicescomponent.jsx'
import TestingComp from './assets/Component/servicesection/Testingcomponent.jsx'
import Fullproject from './assets/Component/Projectswearedone/fullproject.jsx'
import Headingforwhychooseus from './assets/Component/whychoosemarketing/headingforwhychooseus/Headingfo.jsx'
import Pricemodelcomp from './assets/Component/Pricemodel/Pricemodelcomp.jsx'
import Fullpricemodel from './assets/Component/Pricemodel/fullpricemodel.jsx'
import MarqueeDemo from './assets/Component/Testimonial/MainTestimonialcomp.jsx'
import ReviewCard from './assets/Component/Testimonial/Testimonialcomp.jsx'
import FullcompLoopingtext from './assets/Component/LoopingText/FullcompLoopingText.jsx'
import Footer from './assets/Component/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
