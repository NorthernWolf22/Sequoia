"use client";

import { motion } from "motion/react";

interface DoughnutChartProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    duration?: number;
    showPercentage?: boolean;
}

const DoughnutChart = ({ percentage, size = 200, strokeWidth = 20, duration = 2, showPercentage = true } : DoughnutChartProps) => {
    const clampedPercentage: number = Math.min(
        Math.max(percentage, 0),
        100
    );

    /*
     * Calculate the radius of the circle.
     *
     * Half the SVG size gives us the centre point.
     * We subtract half the stroke width so the stroke
     * remains inside the SVG boundaries.
     */
    const radius: number = (size - strokeWidth) / 2;

    /*
     * Calculate the circumference of the circle.
     */
    const circumference: number = 2 * Math.PI * radius;

    /*
     * Calculate how much of the circumference should
     * remain hidden.
     *
     * 0%   = full circumference hidden
     * 50%  = half circumference hidden
     * 75%  = quarter circumference hidden
     * 100% = nothing hidden
     */
    const progressOffset: number =
        circumference * (1 - clampedPercentage / 100);

    return (
        <div
            className="absolute right-[-30px] top-[-30px]"
            style={{
                width: size,
                height: size,
            }}
        >
            <svg
                className="-rotate-90"
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                aria-label={`${clampedPercentage}% complete`}
                role="img"
            >
                {/* Background */}
                <circle
                    className="fill-none stroke-gray-200"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />

                {/* Animated progress */}
                <motion.circle
                    className="fill-none stroke-brand-900"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{
                        strokeDashoffset: circumference,
                    }}
                    animate={{
                        strokeDashoffset: progressOffset,
                    }}
                    transition={{
                        duration,
                        ease: "easeInOut",
                        delay: 0.8
                    }}
                />
            </svg>

            {/* Centre content */}
            {showPercentage && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">
                        {clampedPercentage}%
                    </span>
                </div>
            )}
        </div>
    );
};

export default DoughnutChart;