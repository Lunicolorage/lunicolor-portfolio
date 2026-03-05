import { useContext, useState } from "react";
import { LangueContext } from "../../contexts/LangueContext";
import removeAccents from 'remove-accents';
import { motion, AnimatePresence } from 'framer-motion';
import H1 from "../H1.jsx";
import BoutonsFiltre from "./BoutonsFiltre.jsx";
import LazyImg from "./LazyImg.jsx";

const allImages = import.meta.glob('../../assets/sectionArtImg/**/*.{jpg,jpeg,png,webp,gif}', { eager: true });

const images = Object.entries(allImages).map(([path, module]) => {
  const categorie = path.includes('/anim/') ? 'anim'
    : path.includes('/digital/') ? 'digital'
    : 'tradi';
  return {
    src: module.default,
    categorie,
    nom: path.split('/').pop(),
  };
}).sort((a, b) => a.nom.localeCompare(b.nom)); 

function CreationsArt() {
  const [, , text] = useContext(LangueContext);
  const [filtre, setFiltre] = useState('tous');
  const [imageSelectionnee, setImageSelectionnee] = useState(null);

  const imagesFiltrees = filtre === 'tous'
    ? images
    : images.filter(img => img.categorie === filtre);


  return (
    <div className="creationsArt">
      <H1 text={text.header?.art[0]} id={removeAccents(text.header?.art[0].toLowerCase())} />
      

      <div className="filtres">
            <BoutonsFiltre filtre={filtre} setFiltre={setFiltre} contenu="tous" index={0}/>
            <BoutonsFiltre filtre={filtre} setFiltre={setFiltre} contenu="anim" index={1}/>
            <BoutonsFiltre filtre={filtre} setFiltre={setFiltre} contenu="digital" index={2}/>
            <BoutonsFiltre filtre={filtre} setFiltre={setFiltre} contenu="tradi" index={3}/>
      </div>

     <AnimatePresence >
      <div className="grilleProjets" key={filtre}>
        {imagesFiltrees.map((img) => (
          <LazyImg key={img.nom} img={img} onClick={setImageSelectionnee} />
        ))}
      </div>
    </AnimatePresence>
    <AnimatePresence>
      {imageSelectionnee && (
        <motion.div
          className="overlayImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setImageSelectionnee(null)}
        >
          <motion.img
            src={imageSelectionnee.src}
            alt={imageSelectionnee.nom}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  )
}

export default CreationsArt