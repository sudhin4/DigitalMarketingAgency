import seo from '../../../Images/seo.png'
import './Testing.css'

function TestingComp({Name,image}) {
  return (
    <>
      <div className="fullservicesectiondivv">
        <div className="contentservicesectiondivv">
            <div className='imageandheadingservice'>
                <h2 className="servicename">{Name}</h2>
                
          
            </div>
            
          <p className="serviceparagraph">
            We help your business rank higher, attract the right audience, and
            grow organically. From keyword strategy to content optimization, our
            SEO experts ensure your brand stands out on every search engine.
          </p>
        </div>
        <img src={image} alt="" className='imageforservicesection' />
      </div>
    </>
  );
}

export default TestingComp;
