import { useState, createContext,useEffect } from "react";

export const LangueContext = createContext();

function LangueProvider({ children }) {

    const [langue, setLangue] = useState("fr");
    const [text, setText] = useState({});

    useEffect(() => {
        const fetchLangue = async () => {
            try {
                const response = await fetch(`langue/${langue}.json`);
                const jsonData = await response.json();
                setText(jsonData);
            } catch (error) {
                console.error('Erreur lors du chargement du fichier JSON :', error);
            }
        };
        fetchLangue();
    }, [langue]);

    return(
        <LangueContext.Provider value={[langue, setLangue, text]}>
            {children}
        </LangueContext.Provider>
    );
}

export { LangueProvider };