import { useState, createContext} from "react";

export const ChoixContext = createContext();

function ChoixProvider({ children }) {
    let [ChoixSide, setChoixSide] = useState(null);

    //  useEffect(() => {
    //     console.log(ChoixSide);
    // }, [ChoixSide]);

    return(
        <ChoixContext.Provider value={[ChoixSide, setChoixSide]}>
            {children}
        </ChoixContext.Provider>
    );
}

export { ChoixProvider };