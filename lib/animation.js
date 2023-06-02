export const customVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.6,
            duration: 1.5,
            ease: 'easeOut',
        },
    }
}

export const cardContainerAnimation = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2
        }
    }
}

export const cardItemAnimation = {
    hidden: { y: "100%" },
    show: { y: "0%", transition: { duration: 0.5 } }
}