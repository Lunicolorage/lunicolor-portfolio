import { useContext } from "react";
import { LangueContext } from "../../contexts/LangueContext";
import { ChoixContext } from '../../contexts/ChoixContext.jsx';
import SelectLangue from "./SelectLangue.jsx";
import BoutonChoix from "./BoutonChoix.jsx";
import fondBlanc from '../../assets/fond/fond-blanc-v3.png';
import fondNoir from '../../assets/fond/fond-noir-v3.png';
import removeAccents from 'remove-accents';

function Footer() {
    const [, , text] = useContext(LangueContext);
    const [ChoixSide, setChoixSide] = useContext(ChoixContext);

    let actualMenu = ChoixSide === "dev" ? text.header?.dev : text.header?.art;
    let fondImage = ChoixSide === "dev" ? fondBlanc : fondNoir;

    const currentYear = new Date().getFullYear();

    return (
        <footer className={ChoixSide === "dev" ? "dev" : "art"}>
            <img src={fondImage} alt="Fond du footer" />
            <div>
                <nav>
                    <ul className="navFooter">
                        {actualMenu?.map((item, index) => (
                            <li key={index}>
                                <a href={`#${removeAccents(item.toLowerCase())}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <BoutonChoix />
                <SelectLangue />
            </div>
            <p>© {currentYear} - Lunicolor - all rights reserved</p>
        </footer>
    );
}

export default Footer;