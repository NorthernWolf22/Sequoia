import { motion, type Variants } from "motion/react";

export const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.75,
        },
    },
};

export const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};