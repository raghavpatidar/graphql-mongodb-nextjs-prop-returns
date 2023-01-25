import React, { useState } from 'react'
import house1 from "../public/housex.jpg";
import Image from "next/image";
import beedroomimg from "../public/beedroomimg.png";
import bathroomimg from "../public/bathroomimg.png";
import areaimg from "../public/areaimg.png";
import { motion } from 'framer-motion';
import Link from 'next/link'

const Map = ({ houseDetails }) => {

    console.log("MAP");
    console.log(houseDetails);
    const house = houseDetails[0];


    return (
        <>
            <motion.div animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0.9, opacity: 0 }} transition={{ duration: 1 }} className="relative text-right rounded-2xl flex flex-row min-h-screen justify-center items-center">
                <div className="bg-none rounded-2xl overflow-hidden  ">;
                    <iframe className='lg:w-[650px] lg:h-[650px] md:w-[500px] md:h-[500px] md sm:w-[350px] sm:h-[350px] ' id="gmap" src="https://maps.google.com/maps?q=2972%20Westheimer%20Rd.%20Santa%20Ana,%20Illinois%2085486&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                    <Link href="https://www.embedgooglemap.net"> </Link>
                </div>
            </motion.div>
            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: -10, opacity: 0 }} transition={{ duration: 1, delay: 1 }} className="max-w-sm  lg:max-w-full sm:hidden  lg:flex sm:flex left-36 top-28 absolute  rounded-2xl ">
                <div className={`pl-4 flex flex-col justify-between leading-normal rounded-2xl shadow-xl bg-white`}>
                    <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -10 }} transition={{ duration: 1, delay: 1 }} className="lg:flex items-center hidden ">
                        <Image className="mr-4 w-10 h-10 rounded-xl  hidden lg:block" src={house1} alt="img" width={135} height={135} />
                        <div className="text-md p-5 ">
                            <p className={`font-bold text-black leading-none`}>${house.price}</p>
                            <p className={`pt-1 mr-3 text-sm text-gray-600`}>{house.address}</p>
                            <span className="px-3 pt-1 m-5 text-sm font-medium bg-gray-200 inline-block rounded-lg">{" "}<Image src={beedroomimg} alt='beedroomimg' /> {house.noOfBeds}</span>
                            <span className="px-3 pt-1 mr-5 mb-2 text-sm font-medium inline-block bg-gray-300 rounded-lg    ">{" "}<Image src={bathroomimg} alt='img' /> {house.noOfBathroom}</span>
                            <span className="px-3 pt-1 mr-2 mb-2  text-sm font-medium inline-block bg-gray-300 rounded-lg   ">{" "}<Image src={areaimg} alt='areaimg' /> {house.area} m&sup2;</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default Map