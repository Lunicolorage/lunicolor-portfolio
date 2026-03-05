import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function CardProject({ projet, side, pair }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true,  amount: 0.15});
    

    return (
        <motion.div
            ref={ref}
            className={`cardProjet ${side} ${pair ? 'pair' : 'impair'}`}
            initial={{ opacity: 0, x: pair ? -80 : 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <img src={projet.img} alt={projet.titre} loading="lazy" width="800"/>
            <div className="infosProjet">
                <h2>{projet.titre}</h2>
                <p>{projet.type}</p>
                <p>{projet.description}</p>
                {projet.lien && <a href={projet.lien} target="_blank" rel="noopener noreferrer">{projet.lienTexte}</a>}
            </div>
        </motion.div>
    )
}

export default CardProject
