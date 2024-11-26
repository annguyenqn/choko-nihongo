'use client'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Book, Lightbulb, UserCheck, Heart, Award, Briefcase } from "lucide-react";
const iconMap: { [key: string]: React.ReactNode } = {
    book: <Book className="w-8 h-8 text-blue-500" />,
    Lightbulb: <Lightbulb className="w-8 h-8 text-blue-500" />,
    UserCheck: <UserCheck className="w-8 h-8 text-blue-500" />,
    Heart: <Heart className="w-8 h-8 text-blue-500" />,
    Award: <Award className="w-8 h-8 text-blue-500" />,
    Briefcase: <Briefcase className="w-8 h-8 text-blue-500" />,


};
export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        icon: string;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href=""
                    key=""
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-blue-300 block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg">
                            {iconMap[item.icon] || <div className="w-8 h-8 text-gray-500">Icon Not Found</div>}
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-blue-400 border border-transparent dark:border-blue-200 group-hover:border-blue-200 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-white tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
