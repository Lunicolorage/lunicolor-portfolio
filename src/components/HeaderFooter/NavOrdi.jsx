import { useContext } from "react";
import { LangueContext } from "../../contexts/LangueContext";
import { ChoixContext } from '../../contexts/ChoixContext.jsx';
import removeAccents from 'remove-accents';
import { motion } from "motion/react";

function NavOrdi() {
    const [langue, , text] = useContext(LangueContext);
    const [ChoixSide, setChoixSide] = useContext(ChoixContext);

    let actualMenu = [];
    if (ChoixSide === "dev") {
        actualMenu = text.header?.dev;
    } else if (ChoixSide === "art") {
        actualMenu = text.header?.art;
    }
   
    const menuKey = `${ChoixSide}-${langue}`;
    return (
        <ul className="navOrdi" key={menuKey}>
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
    );
}

export default NavOrdi