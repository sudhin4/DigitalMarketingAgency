import { motion, useTransform, useScroll } from "framer-motion";
import image1 from '../../../Images/developmentimage1.png'
import image2 from '../../../Images/developmentimage7.png'
import image3 from '../../../Images/developmentimage3.png'
import image4 from '../../../Images/developmentimage4.png'
import image5 from '../../../Images/developmentimage5.png'
import image6 from '../../../Images/developmentimage6.png'
import { useRef } from "react";
import Card from "./Card";

const cards = [
  { url: image1, title: "Title 1", id: 1 },
  { url: image2, title: "Title 2", id: 2 },
  { url: image3, title: "Title 3", id: 3 },
  { url: image4, title: "Title 4", id: 4 },
  { url: image5, title: "Title 5", id: 5 },
  { url: image6, title: "Title 6", id: 6 },

];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="carousel-section">
      <div className="carousel-sticky">
        <motion.div style={{ x }} className="carousel-motion">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
