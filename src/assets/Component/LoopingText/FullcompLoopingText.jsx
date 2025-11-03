import CurvedLoop from "./Loopingtextcomp";
import './Loopingtext.css'

function FullcompLoopingtext() {
  return (
    <>
      
      
      <CurvedLoop
        marqueeText="Are you ready to elevate your brand online?   "
        speed={2}
        curveAmount={0}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />
      
      
    </>
  );
}

export default FullcompLoopingtext;
