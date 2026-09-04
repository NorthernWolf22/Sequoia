"use client";

import { motion, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";

//model types
import { Logo } from "@/generated/prisma/client";

type LogoScrollRowComponentProps = {
    logos: Logo[];
    reverse: boolean;
    scrollY: MotionValue<number>;
};

function LogoScrollRowComponent({ logos, reverse, scrollY }: LogoScrollRowComponentProps) {
    const firstGroupRef =
        useRef<HTMLDivElement>(null);

    const [groupWidth, setGroupWidth] =
        useState<number>(0);

    useEffect(() => {
        const element: HTMLDivElement | null =
            firstGroupRef.current;

        if (!element) {
            return;
        }

        const updateWidth = (): void => {
            setGroupWidth(element.offsetWidth);
        };

        updateWidth();

        const resizeObserver: ResizeObserver =
            new ResizeObserver(updateWidth);

        resizeObserver.observe(element);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    const speed: number = 0.5;

    const x: MotionValue<number> = useTransform(
        scrollY,
        (value: number) => {
            if (groupWidth === 0) {
                return 0;
            }

            const distance: number =
                value * speed;

            /*
             * reverse === false
             * Move from right → left
             */
            if (!reverse) {
                return -(
                    distance % groupWidth
                );
            }

            /*
             * reverse === true
             * Move from left → right
             */
            return (
                -groupWidth +
                (distance % groupWidth)
            );
        },
    );

    const logoItems = logos.map(
        (logo: Logo) => (
            <div
                key={logo.id}
                className="flex h-20 w-40 shrink-0 items-center justify-center px-8"
            >
                <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
        ),
    );

    return (
        <motion.div
            style={{ x }}
            className="flex w-max"
        >
            {/* First group — used to measure the loop */}
            <div
                ref={firstGroupRef}
                className="flex shrink-0"
            >
                {logoItems}
            </div>

            {/* Duplicate group */}
            <div
                aria-hidden="true"
                className="flex shrink-0"
            >
                {logoItems}
            </div>

            {/* Duplicate group */}
            <div
                aria-hidden="true"
                className="flex shrink-0"
            >
                {logoItems}
            </div>
        </motion.div>
    );
}

export default LogoScrollRowComponent;