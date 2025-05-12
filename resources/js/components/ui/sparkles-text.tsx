"use client";

import { CSSProperties, ReactElement, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface Sparkle {
    id: string;
    x: string;
    y: string;
    color: string;
    delay: number;
    scale: number;
    lifespan: number;
}

interface SparklesTextProps {
    /**
     * @default <div />
     * @type ReactElement
     * @description
     * The component to be rendered as the text
     * */
    as?: ReactElement;

    /**
     * @default ""
     * @type string
     * @description
     * The className of the text
     */
    className?: string;

    /**
     * @required
     * @type string
     * @description
     * The text to be displayed
     * */
    text: string;

    /**
     * @default 10
     * @type number
     * @description
     * The count of sparkles
     * */
    sparklesCount?: number;

    /**
     * @default "{first: '#9E7AFF', second: '#FE8BBB'}"
     * @type string
     * @description
     * The colors of the sparkles
     * */
    colors?: {
        first: string;
        second: string;
    };
}

const SparklesText: React.FC<SparklesTextProps> = ({
    text,
    colors = { first: "#e8b86d", second: "#cdde9e30" },
    className,
    sparklesCount = 10,
    ...props
}) => {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useEffect(() => {
        const generateStar = (): Sparkle => {
            const starX = `${Math.random() * 100}%`;
            const starY = `${Math.random() * 100}%`;
            const color = Math.random() > 0.5 ? colors.first : colors.second;
            const delay = Math.random() * 5;
            const scale = Math.random() * 1 + 0.3;
            const lifespan = Math.random() * 10 + 5;
            const id = `${starX}-${starY}-${Date.now()}`;
            return { id, x: starX, y: starY, color, delay, scale, lifespan };
        };

        const initializeStars = () => {
            const newSparkles = Array.from(
                { length: sparklesCount },
                generateStar
            );
            setSparkles(newSparkles);
        };

        const updateStars = () => {
            setSparkles((currentSparkles) =>
                currentSparkles.map((star) => {
                    if (star.lifespan <= 0) {
                        return generateStar();
                    } else {
                        return { ...star, lifespan: star.lifespan - 0.1 };
                    }
                })
            );
        };

        initializeStars();
        const interval = setInterval(updateStars, 100);

        return () => clearInterval(interval);
    }, [colors.first, colors.second]);

    return (
        <div
            className={cn("", className)}
            {...props}
            style={
                {
                    "--sparkles-first-color": `${colors.first}`,
                    "--sparkles-second-color": `${colors.second}`,
                } as CSSProperties
            }
        >
            <span className="relative inline-block">
                {sparkles.map((sparkle) => (
                    <Sparkle key={sparkle.id} {...sparkle} />
                ))}
                {text}
            </span>
        </div>
    );
};

const Sparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
    return (
        <motion.svg
            key={id}
            className="pointer-events-none absolute z-20"
            initial={{ opacity: 0, left: x, top: y }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0, scale, 0],
                rotate: [75, 120, 150],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay }}
            width="10"
            height="10"
            viewBox="0 0 21 21"
        >
            <path
                d="M10 0 L12 7 L20 8 L14 12 L16 20 L10 16 L4 20 L6 12 L0 8 L8 7 Z"
                fill={color}
            />
        </motion.svg>
    );
};

export default SparklesText;
