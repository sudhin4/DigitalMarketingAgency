import ScrollVelocity from "./marqueecomp";
import Clients from '../../Component/Marquee/Clients.jsx'
import { Secondmarquee } from "../../Component/Marquee/Clients.jsx";

function ClientsMarquee() {
    const velocity = 100
  return (
    <>
      <ScrollVelocity
        texts={[<Clients/>,<Secondmarquee/>]}
        velocity={velocity}
        className="custom-scroll-text"
      />
    </>
  );
}

export default ClientsMarquee;
