import React from 'react';
import { motion } from 'framer-motion';
import "./styles.css"


export const CardAnimation = ({ name, description, linkHosting, linkRepository }) => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
        visible: { opacity: 1, scale: 1, rotateY: 0 }
    };

    return (
        <motion.div className="animationCard"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 1 }}
        >
           <div className="cardTitles">
           <h2 className='cardName'>{name}</h2>
            <p className='cardDescription'>{description}</p>
           </div>
            <div className="linksContainer">
                <a href={linkHosting}>See Application</a>
                <a href={linkRepository}>See the GitHub Repository</a>
            </div>
        </motion.div>
    );
}

