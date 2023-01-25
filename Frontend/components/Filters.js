import React, { useState } from "react";
import { motion } from 'framer-motion'
import FilterDropdown from "./FilterDropdown";




const Filters = () => {

  const datax = ["Min Price: $500", "Min Price: $600", "Min Price $700"];
  const maxx = ["MAX Price: $500", "MAX Price: $600", "MAX Price $700"];
  const areax = ["Floor area:60 m2", "Floor area:70 m2", "Floor area:80 m2",];
  const salex = ["For Sale", "For Rent", "For Sharing"];
  const typex = ["House", "Apartment", "Hostel", "Flat"];


  return (
    <div>
      <div className={`lg:grid lg:grid-cols-[1.9fr_0.25fr_1fr_0.75fr_1.15fr_1fr_0.65fr] grid grid-cols-[1fr,1fr] bg-white md:grid-cols-[2fr,1fr,1fr] sm:grid-cols-[1fr] content-evenly	`} >
        <div className="lg:mt-2 mt-1" >
          <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: -10, opacity: 0 }} transition={{ duration: 1, delay: 1 }} className=" rounded-md">
            <input
              type="text"
              name="company-website"
              id="company-website"
              className=" bg-[#f3f3f3]  mt-2   focus:ring-gray-500 focus:border-gray-500  p-3 rounded-md text-sm rounded-r-md border-gray-300"
              placeholder="Enter an address, city or ZIP code"
              size="35"
            />
          </motion.div>
        </div>
        <div className="lg:mt-2 mt-1" >
          <FilterDropdown data={salex} />
        </div>
        <div className="lg:mt-2 mt-1">
          <FilterDropdown data={typex} />
        </div>
        <div className="lg:mt-2 mt-1">
          <FilterDropdown data={datax} />
        </div>
        <div className="lg:mt-2 mt-1" >
          <FilterDropdown data={maxx} />
        </div>
        <div className="lg:mt-2 mt-1" >
          <FilterDropdown data={areax} />
        </div>
        <div className="lg:mt-2 mt-1">
          <motion.button animate={{ y: 0, opacity: 1 }} initial={{ y: -10, opacity: 0 }} transition={{ duration: 1, delay: 1 }} className="flex  py-3 pr-5 pl-7  whitespace-nowrap text-sm rounded-md font-medium text-center mx-auto bg-[#f3f3f3] border-0 ">
            {" "}More
            <span className=" w-1.5 h-1.5 mr-2 bg-red-600 rounded-full inline-block "></span>
          </motion.button>

        </div>

      </div>
    </div>

  );
};

export default Filters;
