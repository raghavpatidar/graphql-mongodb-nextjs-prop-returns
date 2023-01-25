import React, { useState } from 'react'
import avatar from '../public/user.png'
import star from '../public/star.png'
import logo from '../public/logo.png'
import Image from 'next/image'
import staractive from '../public/staractive.png'
import { motion } from 'framer-motion';

const Navbar = () => {



  const [like, setLike] = useState(false);

  const handleClick1 = () => {

    setLike(!like);

  }


  return (
    <div>
      <header className={`text-gray-600 body-font bg-white `}>
        <div className="container mx-auto flex flex-wrap p-3 flex-col lg:flex-row items-center sm:overflow-x-hidden md:overflow-x-hidden ">
          <motion.a animate={{ x: 0, opacity: 1 }} initial={{ x: -10, opacity: 0 }} transition={{ duration: 1, delay: 2 }} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={logo} alt='logo' width={198.2} height={58.9} />
          </motion.a>
          <motion.nav animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1, delay: 1.75 }} className="md:ml-auto md:mr-auto ml-10 flex flex-wrap items-center text-base justify-center">
            <a className="mr-10  font-medium  underline underline-offset-4 text-[#468fd1]  hover:text-blue-900">Search</a>
            <a href='https://www.propreturns.com/about-us?utm_source=google&utm_id=sl_prop&gclid=Cj0KCQiAw8OeBhCeARIsAGxWtUz7avBahIlN1nSvZW1gAJmkzvt2qvilAqDyDs4gKWhjYuwMhwTNaWsaAiSrEALw_wcB' className={`mr-10  font-medium  cursor-pointer text-[#868686] hover:text-blue-900`}>About</a>
            <a href='https://www.propreturns.com/terms-and-conditions?utm_source=google&utm_id=sl_prop&gclid=Cj0KCQiAw8OeBhCeARIsAGxWtUz7avBahIlN1nSvZW1gAJmkzvt2qvilAqDyDs4gKWhjYuwMhwTNaWsaAiSrEALw_wcB' className={`mr-10  font-medium  cursor-pointer text-[#868686] hover:text-blue-900`}>Help</a>
            <a href='https://www.propreturns.com/?utm_source=google&utm_id=sl_prop&gclid=Cj0KCQiAw8OeBhCeARIsAGxWtUz7avBahIlN1nSvZW1gAJmkzvt2qvilAqDyDs4gKWhjYuwMhwTNaWsaAiSrEALw_wcB' className={`mr-10 lg:mt-0 mt-4  font-medium  cursor-pointer text-[#868686] hover:text-blue-900`}>Real Estate Agents</a>
            <a href='https://www.propreturns.com/blogs?utm_source=google&utm_id=sl_prop&gclid=Cj0KCQiAw8OeBhCeARIsAGxWtUz7avBahIlN1nSvZW1gAJmkzvt2qvilAqDyDs4gKWhjYuwMhwTNaWsaAiSrEALw_wcB' className={`mr-10 lg:mt-0 mt-4 font-medium  cursor-pointer text-[#868686] hover:text-blue-900`}>Blog</a>
          </motion.nav>
          <span className='flex lg:mt-0 mt-5 ' >
            <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: -10, opacity: 0 }} transition={{ duration: 1, delay: 0.5 }} onClick={handleClick1} className='mr-10 mt-2 cursor-pointer' >
              {like ? <Image src={staractive} alt='star' width={25} height={25} /> : <Image src={star} alt='star' width={25} height={25} />}
            </motion.div>
            <motion.span animate={{ y: 0, opacity: 1 }} initial={{ y: -10, opacity: 0 }} transition={{ duration: 1 }} >
              <Image src={avatar} alt='avatar' width={40} height={40} className='rounded-full' />
            </motion.span>

          </span>

        </div>
      </header>
    </div>
  )
}

export default Navbar