import {useRef } from "react";
import { motion, useInView } from "framer-motion";

function LazyImg({ img, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.img
      ref={ref}
      src={img.src}
      alt={img.nom}
      loading="lazy"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.2 }}
      onClick={() => onClick(img)}
    />
  );
}

export default LazyImg;