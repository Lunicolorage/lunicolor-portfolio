import { useContext, useState } from "react"
import { LangueContext } from "../../contexts/LangueContext"
import removeAccents from 'remove-accents';
import H1 from "../H1.jsx";
import poissonImg from "../../assets/fish/fish.png";
import closeImg from "../../assets/croixBurger.svg";

const positions = [
  { top: '15%',  left: '5%'  },
  { top: '5%',   left: '35%' },
  { top: '12%',  left: '68%' },
  { top: '70%',  left: '18%' },
  { top: '50%',  left: '44%' },
  { top: '65%',  left: '74%' },
];

const sizes =     [300, 280, 250, 200, 260, 220];
const rotations = [-5,   4,  -3,   6,  -4,   3];

function Competences() {
    const [, , text] = useContext(LangueContext);
    const [selected, setSelected] = useState(null);

    return (
        <div className="competences">
            <H1 text={text.header?.dev[0]} id={removeAccents(text.header?.dev[0].toLowerCase())} />
            <div className="competences-aquarium">

                {/* Overlay */}
                {selected !== null && (
                    <div className="competence-overlay" onClick={() => setSelected(null)}>
                        <div className="competence-overlay-content" onClick={e => e.stopPropagation()}>

                            <div className="competence-overlay-fish">
                                <img src={poissonImg} alt={text.sectionDev.competences[selected].titre} />
                                <p>{text.sectionDev.competences[selected].titre}</p>
                            </div>

                            <div className="competence-overlay-text">
                                <h2>{text.sectionDev.competences[selected].titre}</h2>
                                <ul>
                                    {text.sectionDev.competences[selected].competences.map((comp, index) => (
                                        <li key={index}>{comp}</li>
                                    ))}
                                </ul>
                                <p>{text.sectionDev.competences[selected].description}</p>
                            </div>

                            <img className="competence-overlay-close" onClick={() => setSelected(null)} src={closeImg} alt="Close" />
                        </div>
                    </div>
                )}

                {text.sectionDev?.competences?.map((competence, index) => (
                    <div
                        key={index}
                        className="competence"
                        style={{
                            top: positions[index].top,
                            left: positions[index].left,
                            width: `${sizes[index]}px`,
                            transform: `rotate(${rotations[index]}deg)`,
                        }}
                        onClick={() => setSelected(index)}
                    >
                        <img src={poissonImg} alt={competence.titre} />
                        <p>{competence.titre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Competences