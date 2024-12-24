"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={item.name}
                        className="w-[350px] max-w-full bg-red-50 relative rounded-2xl border border-red-500 px-8 py-6 md:w-[450px] shadow-lg"
                    >
                        <blockquote className="relative flex flex-col h-full">
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute"
                            ></div>
                            <div className="flex flex-col">
                                <span className="relative z-20 text-sm leading-[1.6] text-black font-normal">
                                    {item.quote}
                                </span>
                                <div className="relative z-20 mt-6 flex items-start">
                                    <Avatar>
                                        <AvatarImage src={item.avatar} />
                                        <AvatarFallback>{item.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span className="flex flex-col gap-1 ml-3">
                                        <span className="text-sm leading-[1.6] text-black font-normal">
                                            {item.name}
                                        </span>
                                        <span className="text-sm leading-[1.6] text-black font-normal">
                                            {item.title}
                                        </span>
                                    </span>
                                </div>
                            </div>

                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
