import { useContext} from "react";
import { ChoixContext } from "../contexts/ChoixContext";
import Projets from "./SideBoth/Projets.jsx";
import CreationsArt from "./SideArt/CreationArt.jsx";
import Contact from "./SideBoth/Contact.jsx";
import Footer from "./HeaderFooter/Footer.jsx";
import Competences from "./SideDev.jsx/Competences.jsx";

function ChoixSide() {
    const [ChoixSide, setChoixSide] = useContext(ChoixContext);

    if (ChoixSide == "dev"){
        return(
            <section className="devSection">
                <Competences />
                <Projets />
                <Contact/>
                <Footer />
            </section>
        )
    }

    else if (ChoixSide == "art"){
         return(
            <section className="artSection">
                <CreationsArt />
                <Projets />
                <Contact/>
                <Footer/>
            </section>
        )
    }
}

export default ChoixSide