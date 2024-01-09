import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar fixed z-[2] w-full flex justify-between items-center py-4 px-8 border-2 border-[rgba(255, 255, 255, 0.18)] bg-[rgba(255, 255, 255, 0.25)] backdrop-blur-sm">
      <div className="app__navbar-logo flex justify-start items-center ">
        <a href='#' className='no-underline'><h2 className='text-[2rem] font-extrabold text-center capitalize'>RE<span className='text-[#313bac]'>NAN</span ></h2></a>
      </div>
      <ul className="app__navbar-links flex-1 flex justify-center items-center list-none max-[900px]:hidden">
        {['início', 'Sobre', 'Projetos', 'Habilidades', 'Contato'].map((item) => (
          <li className="app__flex p-text my-0 mx-4 flex-col cursor-pointer" key={`link-${item}`}>
            <div className='w-[5px] h-[5px] bg-[transparent] rounde-[50%] mb-[5px]' />
            <a className='text-gray-400 no-underline uppercase text-base font-medium transition-all ease-in-out delay-[0.3] hover:text-[#313bac]' href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu w-[35px] h-[35px] rounded-[50%] relative flex justify-center items-center bg-[#313bac] min-[900px]:hidden">
        <HiMenuAlt4 className="text-white text-lg cursor-pointer" onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
          className="fixed top-0 bottom-0 right-0 z-[5] p-4 w-[80%] h-screen flex justify-end flex-col items-end bg-white bg-cover bg-repeat bg-[url('/bgWhite.png')] shadow-navBox text-gray-400"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX className="text-[#313bac] cursor-pointer w-7 h-7" onClick={() => setToggle(false)} />
            <ul className='list-none m-0 p-0 h-full w-full flex justify-start items-start flex-col min-[900px]:hidden'>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li className="m-4" key={item}>
                  <a className='text-gray-400 no-underline uppercase text-base font-medium transition-all ease-in-out delay-[0.3] hover:text-[#313bac]' href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
