import {useContext, useState, useEffect, use } from "react";
import { LangueContext } from "../../contexts/LangueContext";

function SelectLangue() {
    const [langue, setLangue, text] = useContext(LangueContext);

    const [actualLangue, setActualLangue] = useState(langue);

    useEffect(() => {
        setLangue(actualLangue);
    }, [actualLangue]);

    useEffect(() => {
        setActualLangue(langue);
    }, [langue]);

    // console.log(text.header?.dev?.competences);


    return(
        <select className="navLangue" name="language" id="language-select" value={actualLangue} onChange={(event) => setActualLangue(event.target.value)}>
            <option value="fr">Français</option>
            <option value="en">English</option>
        </select>
    )
}

export default SelectLangue