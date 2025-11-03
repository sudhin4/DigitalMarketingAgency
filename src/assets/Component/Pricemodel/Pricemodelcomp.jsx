import { IoMdCheckmark } from "react-icons/io";
import './Pricemodel.css'


function Pricemodelcomp({planname,price,accessname,classname,buttonclassname}){
    const accename = accessname
    return(
        <>
        <div className={classname}>
            <div className="headingandpricingsectioncontentdiv">
                <h2 className="nameoftheplanpriceheading">{planname}</h2>
                <h3 className="priceoftheplaneheading">{price}</h3>
            </div>
            <div className="divforaccessgivenfortheplandivv">
                {accename.map((item,index)=>{
                    return(
                       <div className="contentforaccessandtickdiv" key={index}>

                <IoMdCheckmark  className="tickmarkinpricingcomp" />
                <h3 className="nameoftheaccessheading">{item}</h3>
                </div>  
                    )
                })}
               
               
                <div className="buttonforcallaction">
                    <button className={buttonclassname}>Get Details </button>
                </div>
               
            </div>
        </div>
        </>
    )
}

export default Pricemodelcomp;