import React from "react";
import { motion } from "framer-motion";

function About() {
    return (
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} exit={{ x: 100 }}>
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700">
                Internee.pk aims to enhance the IT sector by providing opportunities for talented individuals. Explore meaningful projects and work under professional guidance.
            </p>
        </motion.div>
    );
}

export default About;