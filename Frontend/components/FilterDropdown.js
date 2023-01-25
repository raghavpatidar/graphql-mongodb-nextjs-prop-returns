import React, { useState } from 'react'
import { motion } from 'framer-motion';

import DownArrow from './Downarrow';

const FilterDropdown = ({ data }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
    const [value, setValue] = useState(data[0]);
    const handleValue = (e) => {
        e.preventDefault();

        setValue(e.target.innerText);
        setShow(false);
    }
    return (
        <>
            <motion.button animate={{ y: 0, opacity: 1 }} initial={{ y: -10, opacity: 0 }} transition={{ duration: 1, delay: 1 }} onHoverEnd={handleClick} onHoverStart={handleClick} className="flex mx-auto bg-[#f3f3f3] border-0 py-3 px-5 rounded-md font-medium text-center whitespace-nowrap text-sm ">
                {" "}
                {value}
                <DownArrow />
                {show && (
                    <div className="mt-2 lg:w-56 w-24 z-30 lg:mt-8 mr-12 bg-white absolute rounded-md" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                            {data.map((house, index) => {
                                return (
                                    <a onClick={handleValue} className="text-gray-700 block p-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id={index}>{house}</a>
                                )
                            })}
                        </div>
                    </div>

                )}
            </motion.button>
        </>
    )
}

export default FilterDropdown;