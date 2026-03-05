import { useContext, useEffect, useState} from "react";
import { LangueContext } from "../../contexts/LangueContext";
import { ChoixContext } from '../../contexts/ChoixContext.jsx';
import BubbleTail from './BubbleTail.jsx'
import { motion, AnimatePresence } from 'framer-motion';

function Bubble({textClic, compteurClic, limiteClic, onLetterDisplay}) {
    const [langue, , text] = useContext(LangueContext);
    const [ChoixSide, setChoixSide] = useContext(ChoixContext);

    const [contenuBulle, setContenuBulle] = useState("");


    useEffect(() => {
      if (!ChoixSide) {
        setContenuBulle(text.bulle?.start);
      } else if (text.bulle) {
        setContenuBulle(text.bulle[ChoixSide] || '');
      }
    }, [ChoixSide, langue, text]);

    useEffect(() => {
      if (text.bulle?.random) {
        if (compteurClic>=limiteClic){
          setContenuBulle(text.bulle?.annoyed);
        }
        else{
          setContenuBulle(text.bulle.random[textClic]);
        }
      }
    }, [textClic])

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!contenuBulle) return;
    setDisplayedText(""); // reset
    let i = 0;
    const interval = setInterval(() => {
      const char = contenuBulle[i];
      setDisplayedText(contenuBulle.slice(0, i + 1));
      if (char === ' ') onLetterDisplay?.();
      i++;
      if (i >= contenuBulle.length) clearInterval(interval);
    }, 30); // vitesse en ms

    return () => clearInterval(interval); // cleanup si nouveau texte avant la fin
  }, [contenuBulle]);


  return (
    <AnimatePresence mode="wait">
    <motion.div className="speech-bubble"
      key={contenuBulle}
      initial={{ scale: 0.8, x: -40 }}
      animate={{ scale: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
        <BubbleTail />
            {displayedText}
    </motion.div>
    </AnimatePresence>
)
}

export default Bubble
