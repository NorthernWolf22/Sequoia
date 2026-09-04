"use client"
import { useState } from "react";

// Swiper core + modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Navigation } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import type { SwiperProps } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

//models
import { Carousel, CarouselItem } from "@/generated/prisma/client";

//images & icons
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//components
import CarouselCard from "./CarouselCard";

type CarouselComponentProps = {
    carouselQuotes: Carousel & { items: CarouselItem[] };
};

function CarouselComponent({ carouselQuotes }: CarouselComponentProps) {
    const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

    //This check filters out any carousel items whose properties are null, undefined, false, 0, or empty strings preventing bad data from reaching the UI.
    const validAccordionItems = carouselQuotes.items.filter(
        (i) => i.id && i.name && i.quote && i.createDate
    );

    const settings: SwiperProps = {
        onSwiper: setSwiper,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        pagination: false,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
        modules: [EffectCoverflow, Navigation, Keyboard],
        keyboard: { enabled: true },
        className: "w-full",
        breakpoints: {
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
        onSlideChange(swiper) {
            const index = swiper.realIndex;
            const card = carouselQuotes.items[index];

            const status = document.getElementById("carousel-status");
            if (status) {
                status.textContent = `Showing review by ${card.name}`;
            }
        }
    };

    return (
        <div role="region" aria-label="Client reviews carousel">
            <Swiper
                {...settings}
                className="mb-6"
            >
                {validAccordionItems.map((card: CarouselItem) => (
                    <SwiperSlide
                        key={card.id}
                        className="py-5"
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`Review ${card.id} of ${carouselQuotes.items.length}`}
                    >
                        {({ isActive }) => (
                            <CarouselCard
                                isActive={isActive}
                                card={card}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="max-w-56 mx-auto flex justify-between items-center">
                <button
                    type="button"
                    className="btn--icon"
                    aria-label="Previous slide"
                    onClick={() => swiper?.slidePrev()}
                >
                    <FontAwesomeIcon
                        icon={faCaretLeft}
                        className="fa-2x"
                    />
                </button>

                <button
                    type="button"
                    className="btn--icon w-10 h-10"
                    aria-label="Next slide"
                    onClick={() => swiper?.slideNext()}
                >
                    <FontAwesomeIcon
                        icon={faCaretRight}
                        className="fa-2x"
                    />
                </button>
            </div>
        </div>
    );
}

export default CarouselComponent;