import { useContext } from "react";
import { ChoixContext } from '../../contexts/ChoixContext.jsx';
import { LangueContext } from "../../contexts/LangueContext.jsx";

function BoutonChoix() {
    const [ChoixSide, setChoixSide] = useContext(ChoixContext);
    const [, , text] = useContext(LangueContext);
    const accueilSection = document.querySelector('#accueil');

    function handleClick() {
        if (accueilSection) {
            accueilSection.scrollIntoView({ behavior: 'smooth' });
        }
        if (ChoixSide === "dev") {
            setChoixSide("art");
        } else {
            setChoixSide("dev");
        }
    }

    if (ChoixSide === "dev") {
        return (
            <div>
                <button className="boutonSpe art" onClick={handleClick}>{text.boutonChoix?.boutonArt}</button>
            </div>
        );
    } else {
        return (
            <div>
                <button className="boutonSpe dev" onClick={handleClick}>{text.boutonChoix?.boutonDev}</button>
            </div>
        );
    }
}

export default BoutonChoix;