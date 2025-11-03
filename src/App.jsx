import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/Component/Header/Header.jsx";
import Mainpage from "./assets/Component/Mainpage/Mainpage.jsx";
import Clients from "./assets/Component/Marquee/Clients.jsx";
import Numbercounter from "./assets/Component/Numbercounter/Numbercounter.jsx";
import Servicecomponent, {
  Servicecomponenttwo,
} from "./assets/Component/servicesection/Servicescomponent.jsx";
import ClientsMarquee from "./assets/Component/Marquee/Mainmarquee.jsx";
import Fullproject from "./assets/Component/Projectswearedone/fullproject.jsx";
import Whychoosemarket from "./assets/Component/whychoosemarketing/Whychoose.jsx";
import HeadingforwhychooseusComp from "./assets/Component/whychoosemarketing/headingforwhychooseus/Headingfo.jsx";
import Fullpricemodel from "./assets/Component/Pricemodel/fullpricemodel.jsx";
import MarqueeDemo from "./assets/Component/Testimonial/MainTestimonialcomp.jsx";
import FullcompLoopingtext from "./assets/Component/LoopingText/FullcompLoopingText.jsx";
import Footer from "./assets/Component/Footer/Footer.jsx";

function App() {
  return (
    <>
      <div className="headersectioninapp">
        <Header />
      </div>

      <Mainpage />
      <ClientsMarquee />
      {/* <Clients/> */}

      <div className="countersection">
        <div className="childdivforcountersection">
          <div className="countersectioncontent">
            <Numbercounter
              from={0}
              to={150}
              separator=","
              direction="up"
              duration={1}
              className="Numbercounter"
            />
            <h2 className="btmheadingfornumbercounter">Clients</h2>
          </div>
          <div className="countersectioncontent">
            <Numbercounter
              from={0}
              to={300}
              separator=","
              direction="up"
              duration={1}
              className="Numbercounter"
            />
            <h2 className="btmheadingfornumbercounter">Projects</h2>
          </div>
        </div>
        <div className="childdivforcountersection">
          <div className="countersectioncontent">
            <Numbercounter
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="Numbercounter"
            />
            <h2 className="btmheadingfornumbercounter">Country</h2>
          </div>
          <div className="countersectioncontent">
            <Numbercounter
              from={0}
              to={50}
              separator=","
              direction="up"
              duration={1}
              className="Numbercounter"
            />
            <h2 className="btmheadingfornumbercounter">Team</h2>
          </div>
        </div>
      </div>

      <div className="serviceswhatwearedo">
        <div className="headingandsideheading">
          <h2 className="ourserviceheadingfromapp">Our Services</h2>
          <p className="paragraphandsideheadingforservicesfromapp">
            Comprehensive Website Services to Ignite Your Online Success.
            Empower Your Business with Powerful Online Services from our
            Website.
          </p>
        </div>
        <div className="servicecompoentnforappp">
          <Servicecomponenttwo />
        </div>
        <Fullproject />

        <div className="Headingforwhychooseusdivvv">
          <HeadingforwhychooseusComp />
        </div>
        <div className="whychooseusparedivvv">
          <Whychoosemarket />
        </div>
      </div>
      <Fullpricemodel />
      <MarqueeDemo />
      <FullcompLoopingtext />
      <Footer />
    </>
  );
}

export default App;
