import { useEffect, useContext, useState } from "react";
import { LangueContext } from "../../contexts/LangueContext";
import SelectLangue from "./SelectLangue";
import croixBurger from "../../assets/croixBurger.svg";
import removeAccents from 'remove-accents';
import { ChoixContext } from '../../contexts/ChoixContext.jsx';
import { motion } from "motion/react";
import { useScroll, useMotionValueEvent } from "framer-motion";

function HeaderMobile({MenuOpen, setMenuOpen}) {
    const [langue, , text] = useContext(LangueContext);
    const [ChoixSide, setChoixSide] = useContext(ChoixContext);

    const { scrollY } = useScroll();
    const [isOnDark, setIsOnDark] = useState(false);
    
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (ChoixSide === "dev") {
            setIsOnDark(latest > 500);
        }
    });
    let actualMenu = [];
    if (ChoixSide === "dev") {
        actualMenu = text.header?.dev;
    } else if (ChoixSide === "art") {
        actualMenu = text.header?.art;
    }

    const menuKey = `${ChoixSide}-${langue}`;
    return (
        <div  className={`headerMobile ${MenuOpen ? "open" : ""} ${isOnDark ? "lightText" : ""}`}>
            <div className="divCroixBurger">
                <img src={croixBurger} alt="croix burger menu icon" className="croixBurger" onClick={() => setMenuOpen(false)} />
            </div>
            <ul className="navMobile" key={menuKey}>
                {actualMenu?.map((item, index) => (
                    <motion.li
                        className={ChoixSide}
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                        <a href={`#${removeAccents(item.toLowerCase())}`}>{item}</a>
                    </motion.li>
                ))}
            </ul>
            <SelectLangue />
        </div>
    )
}

export default HeaderMobile