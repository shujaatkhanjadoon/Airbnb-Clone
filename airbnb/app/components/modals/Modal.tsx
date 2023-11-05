'use client';

import { useState, useEffect, useCallback } from "react";
import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface ModalProbs{
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled: boolean;
    secondaryAction?: () => void;
    secondaryLabel: string;
}

const Modal: React.FC<ModalProbs> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryLabel,
}) =>{
    const [ showModal, setShowModal ] = useState(isOpen);

    useEffect( () => {
        setShowModal(isOpen);
    },[isOpen]);

    const handelClose = useCallback( () => {
        if(disabled){
            return;
        }
    setShowModal(false);
    setTimeout(() => {
        onClose();
    }, 300);

    }, [onClose, disabled]);

    const handleSublit = useCallback( () => {
        if(disabled){
            return;
        }
        onSubmit()

    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback( () =>{
        if(disabled || !secondaryAction ){
            return;  
        }
        secondaryAction();
    },[disabled, secondaryAction]);

    if(!isOpen){
        return null
    }

    return (
        <div className="
        flex
        items-center
        justify-center
        overflow-x-hidden
        overflow-y-auto
        bg-neutral-800/70
        fixed
        z-50
        inset-0
        outline:none
        ">
            <div className="
            w-full
            md:w-4/6
            lg:w-3/6
            xl:w-3/5
            my-6
            mx-auto
            h:full
            md:h-auto
            lg:h-auto
            ">
                {/* content */}
                <div className="
                {` 
                transition
                duration-300
                h-full
                ${showModal ? 'translate-y-0' : 'translate-y-full' }
                ${showModal ? 'opacity-100' : 'opacity-0' }
                `}
                ">
                    <div className="
                    translate
                    h-full;
                    md:h-auto
                    lg:h-auto
                    rounded-lg
                    shadow-lg
                    relative
                    flex
                    flex-col
                    w-full
                    bg-white
                    outline-none
                    focus:outline-none
                    ">
                        {/* { header } */}
                        <div className="
                        flex
                        items-center
                        p-6
                        rounded-t
                        justify-center
                        relative
                        border-b-[1px]
                        ">
                           <button onClick={ handelClose }
                           className="
                           p-1
                           border-0
                           hover:opacity-70
                           absolute
                           left-9
                           transition
                           "
                           >
                            <IoMdClose size={18} />
                           </button>
                           <div className="
                           text-lg font-semibold
                           ">
                            {title}
                           </div>
                        </div>
                        {/* body */}
                        <div className="
                        relative p-6 flex-auto
                        ">
                            {body}
                        </div>
                        {/* footer */}
                        <div className="
                        flex flex-col p-6"
                        >
                           <div className="
                           flex flex-row w-full gap-4 items-center
                           ">
                            <Button label='My Button' />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;