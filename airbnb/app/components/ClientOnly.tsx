'use client'

import { useState, useEffect } from "react";

interface ClientOnlyProbs {
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProbs> = ({
    children
}) => {
    const [hasMounted, setHasMounde] = useState(false);
    
    useEffect( () => {
        setHasMounde(true);
    }, []);

    if(!hasMounted){
        return null;
    }

    return (
        <>
        {children}
        </>
    )
}
export default ClientOnly;