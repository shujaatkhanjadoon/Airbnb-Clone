'use client';

interface MenuItemProbs{
    onClick: () => void;
    label: string;
}

const MenuItem : React.FC< MenuItemProbs>  = ({
    onClick,
    label
}) => {
    return(
        <div 
        onClick={onClick}
        className="
        px-4
        py-3
        hover:bg-neutral-100
        font-semibold
        transition
        "
        >
            {label}
        </div>
    );
}

export default MenuItem