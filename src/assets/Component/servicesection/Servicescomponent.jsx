import ScrollStack, { ScrollStackItem } from "./ServiceCardcode";
import TestingComp from "./Testingcomponent";
import "./Services.css";
import seo from "../../../Images/seo.png";
import web from "../../../Images/web.png";
import ppc from "../../../Images/ppc.png";
import email from "../../../Images/email.png";
import media from "../../../Images/mediamarket.png";
import content from "../../../Images/content.png";
import coldcall from "../../../Images/contact.png";

function Servicecomponent() {
  return (
    <>
      <div className="scroolstackfromservicecomponent">
        <ScrollStack>
          <ScrollStackItem>
            <TestingComp Name={"SEO"} image={seo} />
          </ScrollStackItem>
          <ScrollStackItem>
            <TestingComp Name={"Content Marketing"} image={content} />
          </ScrollStackItem>
          <ScrollStackItem>
            <TestingComp Name={"Social Media AD"} image={media} />
          </ScrollStackItem>
          <ScrollStackItem>
            <TestingComp Name={"Pay Per Click"} image={ppc} />
          </ScrollStackItem>
          <ScrollStackItem>
            <TestingComp Name={"Email Marketing"} image={email} />
          </ScrollStackItem>
          <ScrollStackItem>
            <TestingComp Name={"Cold Calls"} image={coldcall} />
          </ScrollStackItem>
          <ScrollStackItem>
            <TestingComp Name={"Website Developement"} image={web} />
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </>
  );
}

export default Servicecomponent;

export function Servicecomponenttwo() {
  return (
    <>
      <div className="fullservicesectiondivvsecond">
        <TestingComp Name={"SEO"} image={seo} />

        <TestingComp Name={"Content Marketing"} image={content} />

        <TestingComp Name={"Social Media AD"} image={media} />

        <TestingComp Name={"Pay Per Click"} image={ppc} />

        <TestingComp Name={"Email Marketing"} image={email} />

        <TestingComp Name={"Cold Calls"} image={coldcall} />

        <TestingComp Name={"Website Developement"} image={web} />
      </div>
    </>
  );
}
