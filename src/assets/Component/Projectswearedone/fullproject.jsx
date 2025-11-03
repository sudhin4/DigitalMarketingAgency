import HorizontalScrollCarousel from "./Projectslist";
import "./Projects.css";

function Fullproject() {
  return (
    <>
      <div className="fullprojectssection">
        <div className="projectsectionheadingandsideheadingdiv">
          <h1 className="headingoftheproject">Projects we are done</h1>
          <p className="parafortheprojecttagsection">
            Comprehensive Website Services to Ignite Your Online Success.
            Empower Your Business with Powerful Online Services from our
            Website.
          </p>
        </div>
        <HorizontalScrollCarousel />
        
      </div>
    </>
  );
}

export default Fullproject;
