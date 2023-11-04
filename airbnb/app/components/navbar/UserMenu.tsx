'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useState, useCallback} from 'react';
import MenuItem from './MenuItem';
const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);


    return (
        <div className="relative">
            <div className="flex flex-row gap-3 items-center">
                <div className="
                hidden md:block py-3 px-4 text-sm font-semibold transition cursor-pointer rounded-full hover:bg-neutral-100
                " 
                onClick={ () => {} }
                >
                    Airbnb your home
                </div>
                <div 
                onClick={ toggleOpen }
                className="flex flxe-row gap-3 p-4 md:py-1 md:px-2 transition rounded-full hover:shadow-md border-[1px] items-center cursor-pointer border-neutral-100">
                    <AiOutlineMenu />
                </div>
                <div className='hidden md:block'>
                    <Avatar />
                </div>
            </div>
            {isOpen && (
                <div className='
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflowhidden
                right-0
                top-12
                text-sm
                '
                >
                    <div className='flex flex-col cursor-pointer'>
                       <>
                       <MenuItem 
                       onClick={ () => {} }
                       label="Login"
                       />
                       <MenuItem 
                       onClick={ () => {} }
                       label="Sign Up"
                       />
                       </>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu