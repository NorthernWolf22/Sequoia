"use client";

import { motion } from "motion/react";

//Model types
import { Carousel, CarouselItem } from "@/generated/prisma/client";

//components
import CarouselComponent from "@/components/Carousel/CarouselComponent";

type TestimonialsModuleProps = {
    carouselQuotes: Carousel & { items: CarouselItem[] } | null;
};

function TestimonialsModule({ carouselQuotes }: TestimonialsModuleProps) {

    //If carousel does not exist, the carousel items do not exist or the items array has nothing it to render, do not render this module
    if (!carouselQuotes || !carouselQuotes.items?.length) {
        return null;
    }

    return (
        <motion.section
            id="testimonials"
            className="mod-space-md"
            initial={{
                opacity: 0,
                y: 20,
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 2
            }}
            viewport={{
                once: true,
                amount: 0.6
            }}
        >
            <div className="cont">
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-12 sm:gap-6 mb-10">
                    <div className="col-span-4 sm:col-span-7">
                        <div className="body-lg mb-5">Trusted by our clients</div>
                        <div className="h1 mb-5">What our clients are saying...</div>
                        <p className="max-w-106">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex cupiditate tenetur, amet molestias officiis sit sapiente omnis quae numquam! Repellat nemo sapiente asperiores quibusdam est placeat quo tempora odio suscipit.</p>
                    </div>
                </div>

                <CarouselComponent
                    carouselQuotes={carouselQuotes}
                />
            </div>
        </motion.section>
    );
}

export default TestimonialsModule;