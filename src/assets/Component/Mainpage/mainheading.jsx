import SplitText from "./Mainheadingcomp.jsx";
import './Mainpage.css'

function Mainheadingroot(){
    return(
        <>
        <SplitText
  text="Creating Brands And Digital Solution For Your Brand."
  className="mainpaeheadingtag"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"

/>
        
        </>
    )
}

export default Mainheadingroot;

