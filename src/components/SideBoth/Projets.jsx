import { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import removeAccents from 'remove-accents';
import { LangueContext } from "../../contexts/LangueContext.jsx";
import { ChoixContext } from "../../contexts/ChoixContext.jsx";
import CardProject from './CardProject.jsx';
import H1 from "../H1.jsx";

function Projets() {
    const [, , text] = useContext(LangueContext);
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [ChoixSide, setChoixSide] = useContext(ChoixContext);

    if (ChoixSide === "dev") {
         return (
            <div className="projets dev">
                <H1 text={text.header?.dev[1]} id={removeAccents(text.header?.dev[1].toLowerCase())} />
                <div className="listProjetDev">
                    {text.sectionDev?.projets?.map((projet, index) => (
                        <CardProject key={index} projet={projet} side="dev" pair={index % 2 === 0} />
                    ))}
                </div>
            </div>
        )
    }
    if (ChoixSide === "art") {
        return (
            <div className="projets art">
                <H1 text={text.header?.art[1]} id={removeAccents(text.header?.art[1].toLowerCase())} />
                <div className="listProjetArt">
                    {text.sectionArt?.projets?.map((projet, index) => (
                        <CardProject key={index} projet={projet} side="art" pair={index % 2 === 0} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Projets