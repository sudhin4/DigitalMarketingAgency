import '../Mainpage/Mainpage.css'
import mainpageimage from '../../../Images/figma.png'
import adimage from '../../../Images/marketing.png'
import Mainheadingroot from './mainheading';

function Mainpage(){
    return(
        <>
        <div className="fullmainpagesection">
            <Mainheadingroot/>
            {/* <h1 className="mainpaeheadingtag">Creating Brands And "Digital Solution" <b className='boldsectionmainpage'>For Your Brand.</b></h1> */}
            <h3 className="sideheadingformainpagesection">"Empower your brand with creative strategies, data-driven marketing, and impactful campaigns that deliver real growth and lasting success."</h3>
            <button className="getdealbutton">Get Started</button>
            
        </div>
        <img src={adimage} className='mainpagesection imagefirstimage'  alt="" />
        <img src={mainpageimage} className='mainpagesection imagesecondimage'  alt="" />
        </>
    )
}
export default Mainpage;