import React from 'react';

interface TextProps {
    children: React.ReactNode;
    className?: string;
}

export const Text: React.FC<TextProps> = ({ children, className }) => {
    return <span className={`text-base ${className}`}>{children}</span>;
};