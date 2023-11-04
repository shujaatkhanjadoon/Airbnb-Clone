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
       <button className="
       
       ">
        {label}
       </button>
    );
}
export default Button;