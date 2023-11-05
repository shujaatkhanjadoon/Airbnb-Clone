'use client'

import React from "react";
import { IconType } from "react-icons";

interface ButtonProbs{
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProbs> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon,
}) => {
    return (
       <button className="`
       relative
       disabled:opacity-70
       disabled:cursor-not-allowed
       rounded-lg
       hover:opacity-80
       transition
       w-full
       ${outline ? 'bg-white' : 'bg-rose-500'}
       `">
        {label}
       </button>
    );
}
export default Button;