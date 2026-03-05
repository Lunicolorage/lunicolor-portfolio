import { motion } from "framer-motion";

function H1({ text, id }) {

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

    return (
        <motion.h1 id={id} variants={titleVariants}
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.5 }}>
            {text}
        </motion.h1>
    )
}

export default H1