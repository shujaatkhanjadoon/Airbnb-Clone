'use client';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return(
        <div
        className="
        w-full 
        md:w-auto
        tarnsition
        shadow-sm
        hover:shadow-md
        border-[1px]
        py-2
        rounded-full
        cursor-pointer
        "
        >
           <div 
           className="
           flex flex-row
           items-center
           justify-between
           "
           >
            <div 
            className="
            text-sm
            font-semibold
            px-6
            "
            >
                Anywhere
            </div>
            <div className="
            hidden
            sm:block
            text-sm
            px-6
            border-x-[1px]
            font-semibold
            flex-1
            text-center
            ">
                Any Week
            </div>
            <div className="
            flex
            flex-row
            text-sm
            text-gray-600
            items-center
            gap-3
            pl-6
            pr-2
            "
            >
                <div className="hidden sm:block ">Add Guests</div>
                <div className="p-2 bg-rose-500 text-white rounded-full">
                    <BiSearch size={18} />
                </div>
            </div>

           </div>
        </div>
    );
}

export default Search;