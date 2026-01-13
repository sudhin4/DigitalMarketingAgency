import './Footer.css'
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";





function Footer(){
    return(
        <>
        <div className='footersectiondivv'>
            <div className='firstrowsectiondivinfooter'>
                <div className='logoandsocialmedialink'>
                <h2 className='logoforfooterheading'>Agency.</h2>
                <div className='logosforsocialmediadivv'>
                    <FaXTwitter className='iconsforsocialmediainfooter'/>
                    <IoLogoInstagram className='iconsforsocialmediainfooter'/>
                    <FaFacebook className='iconsforsocialmediainfooter'/>
           
                </div>
                     </div>
            <div className='subscribenewsletterdivv'>
                <h3 className='headingforthenewslettersection'>Subscribe for news letter</h3>
                <p className='paragraphforsubscribeinfooter'>Subscribe to our newsletter and get the latest digital marketing tips, trends, and updates straight to your inbox. Stay informed, grow your business, and never miss important insights!</p>
                <button className='buttonforsubscribefornewsletter'>Subscribe</button>
            </div>
            <div className='contactforfootersection'>
                <div className='contactsectiondiv'>
                    <div className='emailsection'>
                        <MdOutlineMail className='contacticonsection'/>
                        <h2 className='emailheadingforfooter'>sudhinnaveen38@gmail.com</h2>
                    </div>
                    <div className='emailsection'>
                        <FaPhoneAlt className='contacticonsection'/>
                        <h2 className='emailheadingforfooter'>9876543210</h2>
                    </div>
                </div>
            </div>
                
            </div>
            <div className='secondsectionofthefooter'>
                <div className='firstservicesectiondiv'>
                    <h1 className='headingfortheservicesectionn'>Services</h1>
                    <h3 className='h222'>SEO</h3>
                    <h3 className='h222'>Social Media Marketing</h3>
                    <h3 className='h222'>Pay-Per-Click</h3>
                    <h3 className='h222'>Content Marketing</h3>
                    <h3 className='h222'>Email Marketing</h3>
                    <h3 className='h222'>Cold Calls</h3>
                </div>
                <div className='firstservicesectiondiv'>
                    <h1 className='headingfortheservicesectionn'>Development</h1>
                    <h3 className='h222'>Website Development</h3>
                    <h3 className='h222'>Website Design</h3>
                    <h3 className='h222'>Website Rebranding</h3>
                    <h3 className='h222'>Application Development</h3>
                </div>
            </div>
            <h2 className='copyrightsss'> <FaRegCopyright className='cpoyrightlogoo'/> Copy rights are all Claimed <a href="http://v1rtual.in">V1rtual</a></h2>
        </div>
        
        </>
    )
}

export default Footer;