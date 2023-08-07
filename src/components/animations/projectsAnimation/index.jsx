import React from 'react';
import { motion } from 'framer-motion';


export const AboutAnimation = ({ name, description, reference }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        hover: { scale: 1.1 }
    };

    return (
        <motion.div className="productCard"
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={cardVariants}
        >
            <h2 className='productCardname'>{name}</h2>
            <p className='productCardDescription'>{description}</p>
            <a href={reference}>See Application</a>
       
        </motion.div>
    );
}
