import { useContext } from "react";
import { LangueContext } from "../../contexts/LangueContext";
import { motion } from "motion/react";

function BoutonsFiltre({ setFiltre, filtre, contenu, index }) {
    const [, , text] = useContext(LangueContext);

    return(
        <motion.button
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`boutonCreaFiltre ${filtre === contenu ? 'active' : ''}`} 
            onClick={() => setFiltre(contenu)}
        >
                {text.sectionArt?.creations[index]}
        </motion.button>
    )
}

export default BoutonsFiltre;