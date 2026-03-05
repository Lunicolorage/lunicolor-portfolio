import OpenPontonImg from '../../assets/pontonImg/pontonOpenMouth_v2.png'
import SmilePontonImg from '../../assets/pontonImg/pontonSmileMouth_v2.png'
import madPontonImg from '../../assets/pontonImg/pontonMad.png'
import Vague from './Vague.jsx'
import { useContext, useState} from "react";
import { LangueContext } from "../../contexts/LangueContext";
import { ChoixContext } from '../../contexts/ChoixContext.jsx';
import Bubble from './Bubble.jsx';
import { motion } from 'framer-motion'
import VagueArt from './VagueArt.jsx';

function Accueil() {
  const [, , text] = useContext(LangueContext);
  const [ChoixSide, setChoixSide] = useContext(ChoixContext);

  const [dialogIndex, setDialogIndex] = useState(0);
  const [compteurClic, setCompteurClic] = useState(0);

  const [imagePonton, setImagePonton] = useState(SmilePontonImg);

  const limiteClic = 30;

  const handlePontonClick = () => {
    setCompteurClic(prev => prev + 1);
    // console.log(compteurClic);
    const randomLength = text.bulle?.random.length;
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * randomLength);
    } while (newIndex === dialogIndex);
    setDialogIndex(newIndex);

    if (compteurClic>=limiteClic){
      setImagePonton(madPontonImg);
    }
  };

  const handleLetterDisplay = () => {
    if (compteurClic >= limiteClic) return;
    setImagePonton(OpenPontonImg);
    setTimeout(() => setImagePonton(SmilePontonImg), 150);
  };


  return (
    <div className="accueil" id="accueil">
      <motion.img 
        src={imagePonton}
        className="pontonImg"
        alt="lunicolor sur un ponton"
        whileTap={{ scale: 0.9, rotate: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 7 }}
        onClick={() => handlePontonClick()}
      />
      <Bubble 
        textClic={dialogIndex} 
        compteurClic={compteurClic} 
        limiteClic={limiteClic}
        onLetterDisplay={handleLetterDisplay}
      />
      <div className='fondBoutons'>
        <Vague />
        <div className='fondVague'></div>
        <div className={`boutonsMer ${ChoixSide || ''}`}>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            onClick={() => setChoixSide('art')} 
            className='boutonSpe art'>
              {text.boutonChoix?.boutonArt}
            </motion.button>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            onClick={() => setChoixSide('dev')} 
            className='boutonSpe dev'>
              {text.boutonChoix?.boutonDev}
          </motion.button>
        </div>
        {ChoixSide === 'art' && <VagueArt />}
      </div>
    </div>
  )
}

export default Accueil
