import "../Marquee/Clients.css";
import dmart from "../../../Images/dmartlogo.png";
import Ceat from "../../../Images/Ceat.png";
import DHL from "../../../Images/DHL.png";
import godrej from "../../../Images/godrej.png";
import Grow from "../../../Images/Grow.png";
import lenskart from "../../../Images/Lenskart-Logo.png";
import upstock from "../../../Images/upstock.png";
import Tvs from "../../../Images/tvsimage.png";

// second row logos
import Airtal from "../../../Images/Airtal.png";
import Honda from "../../../Images/Vcare.png";
import Oil from "../../../Images/Indian Oil.png";
import Kotak from "../../../Images/Kotak.png";
import Mrf from "../../../Images/Mrf.png";
import Pain from "../../../Images/Paint.png";
import Titan from "../../../Images/Titan.png";
import Trends from "../../../Images/trends.png";

function Marqueesection() {
  return (
    <>
      <div className="fullofclientspagesection">
        <div className="clientsdivformainpage">
          <img src={dmart} alt="" className="companylogoforclients" />
          <img src={godrej} alt="" className="companylogoforclients" />
          <img src={Grow} alt="" className="companylogoforclients" />
          <img
            src={upstock}
            alt=""
            className="companylogoforclients flipkart"
          />
          <img src={Tvs} alt="" className="companylogoforclients" />
          <img src={Ceat} alt="" className="companylogoforclients" />
          <img src={DHL} alt="" className="companylogoforclients" />
          <img src={lenskart} alt="" className="companylogoforclients" />
        </div>
      </div>
    </>
  );
}

export default Marqueesection;

export function Secondmarquee() {
  return (
    <>
      <div className="fullofclientspagesection secondmarqueesection">
        <div className="clientsdivformainpage">
          <img src={Airtal} alt="" className="companylogoforclients" />
          <img src={Honda} alt="" className="companylogoforclients" />
          <img src={Oil} alt="" className="companylogoforclients" />
          <img src={Kotak} alt="" className="companylogoforclients " />
          <img src={Mrf} alt="" className="companylogoforclients jio" />
          <img src={Pain} alt="" className="companylogoforclients" />
          <img src={Titan} alt="" className="companylogoforclients jio" />
          <img src={Trends} alt="" className="companylogoforclients" />
        </div>
      </div>
    </>
  );
}
