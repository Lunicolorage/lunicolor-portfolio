import burgerIcone from "../../assets/burgerIcone.svg";
import SelectLangue from "./SelectLangue";
import logoImg from "../../assets/logo.png";
import NavOrdi from "./NavOrdi.jsx";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { ChoixContext } from "../../contexts/ChoixContext.jsx";

function Header({ MenuOpen, setMenuOpen }) {

    const [ChoixSide, setChoixSide] = useContext(ChoixContext);

    const { scrollY } = useScroll();
    const [isOnDark, setIsOnDark] = useState(false);

    
    // useMotionValueEvent(scrollY, "change", (latest) => {
    //     if (ChoixSide === "dev") {
    //         setIsOnDark(latest > 500);
    //     }
    // });

    useEffect(() => {
        if (ChoixSide === "dev") {
            const handleScroll = () => {
                setIsOnDark(window.scrollY > 500);
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
        if (ChoixSide === "art") {
            setIsOnDark(false);
        }

    }, [ChoixSide]);

    return (
        <header className={isOnDark ? "lightText" : ""}>
                <nav className="NavHeader">
                    <a href="#accueil"><img className="logoHeader" src={logoImg} alt="logo Lunicolor"  /></a>
                    <NavOrdi />
                </nav>
                <div className="navOrdi">
                    <SelectLangue />
                </div>
            <img src={burgerIcone} alt="burger menu icon" className="burgerIcone" onClick={() => setMenuOpen(!MenuOpen)} />
        </header>
    )
}

export default Header