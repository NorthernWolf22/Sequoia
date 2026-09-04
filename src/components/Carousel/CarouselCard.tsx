import { motion } from "motion/react";

//model types
import { CarouselItem } from "@/generated/prisma/client";
import Image from "next/image";

//Images and icons
import trustpilot_stars from "@/../public/images/trustpilot.png";

type CarouselCardProps = {
    card: CarouselItem;
    isActive: boolean;
};

function CarouselCard({ card, isActive }: CarouselCardProps) {

    return (
        <>
            <div id="carousel-status" aria-live="polite" className="sr-only"></div>
            <motion.article
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.5 }}
                className={isActive ? "bg-brand-900 rounded-3xl p-6 text-left text-white" : "bg-brand-200 rounded-3xl p-6 text-left text-black"}
            >
                <Image
                    src={trustpilot_stars}
                    alt="5 star rating"
                    width={133}
                    height={44}
                    className="mb-2.5"
                />
                <blockquote className="mb-8.5">
                    <p>{card.quote}</p>
                </blockquote>
                <cite className="text-lg font-normal mb-1 block not-italic">{card.name}</cite>
                <time dateTime={card.createDate.toISOString().split("T")[0]}>{card.createDate.toLocaleDateString()}</time>
            </motion.article>
        </>
    );
}

export default CarouselCard;