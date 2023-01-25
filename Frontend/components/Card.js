import React, { useState } from 'react'
import Image from "next/image";
import beedroomimg from "../public/beedroomimg.png";
import bathroomimg from "../public/bathroomimg.png";
import areaimg from "../public/areaimg.png";
import star from "../public/star.png";
import staractive from "../public/staractive.png";
import house from "../public/housex.jpg";
import house2 from "../public/housex2.jpg";
import house3 from "../public/housex3.jpg";
import house4 from "../public/housex4.jpg";
import { motion } from 'framer-motion';


const Card = ({ houseDetails, idx }) => {

    const [like, setLike] = useState(false);
    console.log("Card" + idx);
    console.log(houseDetails);
    const starClick = () => setLike(!like);
    var houseimg;
    if (idx == 0) houseimg = house;
    else if (idx == 1) houseimg = house2;
    else if (idx == 2) houseimg = house3;
    else houseimg = house4;
    return (
        <motion.div animate={{ y: 0, x: 0, opacity: 1 }} initial={{ y: 10, x: 10, opacity: 0 }} transition={{ duration: 1, delay: 1 }} whileHover={{ position: 'relative', zIndex: 1, scale: 1.1, transition: { duration: 1, delay: 0 } }} className={`max-w-sm rounded-xl overflow-hidden shadow-lg mt-5 lg:ml-5 mx-2  relative  border-none`} >
            <Image className=" rounded-xl  " src={houseimg} alt="img" height={1800} />
            <span className="px-2.5 py-1.5 text-xs mr-3 mb-3 text-white left-2 top-2 bg-green-500 rounded-lg font-medium absolute inline-block">{" NEW"}</span>
            <span className="px-2.5 py-1.5 text-xs mr-3 mb-3 text-white left-16 top-2  bg-cyan-500 rounded-lg font-medium absolute inline-block">{" For SALE"}</span>
            <span onClick={starClick} className="pt-2 px-2 text-sm  right-2 top-2 cursor-pointer bg-white rounded-lg font-medium absolute inline-block">{" "}{like ? <Image src={staractive} alt='star' /> : <Image src={star} alt='star' />}</span>
            <div className="px-4 py-2">
                <div className={`font-bold text-lg mb-2  text-black `}>$ {houseDetails.price}</div>
                <p className={`text-sm text-gray-500 `}>{houseDetails.address}</p>
            </div>
            <div className="lg:px-4 lg:pt-3 lg:pb-2 lg:ml-2 ml-18">
                <span className="px-1.5 py-0.5 mr-2 mb-0 text-sm font-medium bg-gray-200 rounded-lg inline-block">{" "}<Image src={beedroomimg} alt='beedroomimg' />{" "}{houseDetails.noOfBeds}</span>
                <span className="px-1.5 py-0.5 mr-2 mb-0 text-sm font-medium bg-gray-200 rounded-lg inline-block">{" "}<Image src={bathroomimg} alt='img' /> {" "}{houseDetails.noOfBathroom}</span>
                <span className="px-1.5 py-0.5 mr-2 mb-0 text-sm font-medium bg-gray-200 rounded-lg inline-block">{" "}<Image src={areaimg} alt='areaimg' />{" "}{houseDetails.area} m&sup2;</span>
            </div>
        </motion.div>

    )
}

export default Card