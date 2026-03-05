import scaphandreWhite from '../../assets/scaphandre/scaphandre_blanc.png';
import scaphandreBlack from '../../assets/scaphandre/scaphandre_noir.png';
import { useContext } from "react";
import { LangueContext } from "../../contexts/LangueContext";
import { ChoixContext } from '../../contexts/ChoixContext.jsx';
import { motion } from "framer-motion";

function Contact() {
    const [, , text] = useContext(LangueContext);
    const [ChoixSide, setChoixSide] = useContext(ChoixContext);

    let ReseauxContact = ChoixSide === "dev" ? text.sectionDev?.reseaux : text.sectionArt?.reseaux;
    let side = ChoixSide === "dev" ? "dev" : "art";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };

    const imgVariants = {
        hidden: { opacity: 0, x: -60, rotate: -8 },
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 14,
                duration: 0.7
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, scale: 0.7 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 16
            }
        }
    };

    const listItemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 14,
                delay: i * 0.15,
            }
        })
};

    return (
        <motion.div
            className={`contact ${side}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.img
                src={side === "dev" ? scaphandreWhite : scaphandreBlack}
                alt="luni scaphandre"
                variants={imgVariants}
                whileHover={{
                    rotate: [0, -3, 3, -2, 0],
                    transition: { duration: 0.8, ease: "easeInOut" }
                }}
            />
            <motion.div className="contactText" variants={containerVariants}>
                <motion.h1 id="contact" variants={titleVariants}>
                    {text.contact?.contact}
                </motion.h1>
                <motion.div variants={textVariants}>
                    <motion.p variants={textVariants}>
                        <span>{text.contact?.mail}</span>
                        <motion.a
                            href="mailto:lunamon45470@gmail.com"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            style={{ display: "inline-block" }}
                        >
                            {" "}lunamon45470@gmail.com
                        </motion.a>
                    </motion.p>
                    <motion.p variants={textVariants}>
                        <span>{text.contact?.reseaux}</span>
                    </motion.p>
                    <motion.ul>
                        {ReseauxContact && Object.entries(ReseauxContact).map(
                            ([nom, lien], i) => (
                                <motion.li
                                    key={nom}
                                    variants={listItemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    custom={i}
                                >
                                    <motion.a
                                        href={lien}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{ display: "inline-block" }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        {nom}
                                    </motion.a>
                                </motion.li>
                            )
                        )}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Contact