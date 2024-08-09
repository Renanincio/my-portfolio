import { motion } from "framer-motion";
import circle from "/circle.svg";
import javascript from "/javascript.png";
import node from "/node.png";
import react from "/react.png";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div
    id="início"
    className="app__header app__flex flex justify-center items-center min-h-screen relative bg-[url('/bgIMG.png')] bg-cover bg-center bg-repeat flex-1 w-full h-full flex-row pt-24 px-8 pb-0 min-[2000px]:pt-32 max-[1200px]:flex-col max-[450px]:pt-24 max-[450px]:px-4 max-[450px]:pb-8"
  >
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info flex-[0.65] flex flex-col justify-start items-start h-full my-0 mx-8 max-[1200px]:w-full max-[1200px]:mr-0"
    >
      <div className="app__header-badge w-full flex justify-end items-end flex-col max-[1200px]:justify-start max-[1200px]:items-start ">
        <div className="badge-cmp app__flex flex justify-center items-center py-4 px-8 bg-white rounded-[15px] flex-row w-auto shadow-header">
          <span className="text-4xl min-[2000px]:text-[5rem]">👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="text-[0.8rem] text-gray-400 leading-normal min-[2000px]:text-[1.75rem]   w-full uppercase text-right">Olá, Eu sou</p>
            <h1 className="head-text text-[2.75rem] font-extrabold text-center capitalize min-[2000px]:text-[4rem]">Renan</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex flex justify-center items-center py-4 px-8 bg-white rounded-[15px] w-auto shadow-header flex-col mt-12">
          <p className="p-text text-[0.8rem] text-gray-400 leading-normal min-[2000px]:text-[1.75rem]   w-full uppercase text-right">Desenvolvedor</p>
          <p className="p-text text-[0.8rem] text-gray-400 leading-normal min-[2000px]:text-[1.75rem]   w-full uppercase text-right">Front-End</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img flex-1 h-full flex justify-center items-end relative max-[1200px]:my-8 max-[1200px]:mx-0"
    >

<img
        className="max-[950px]:w-full w-[475px] rounded-[100%] object-contain z-[1] "
        src="/perfil.webp"
        alt="profile_bg"
      />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={circle}
        alt="profile_circle"
        className="overlay_circle absolute left-0 right-0 bottom-0 z-0 w-full h-[90%]"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles flex-[0.75] flex flex-col justify-evenly items-start h-full ml-4 [&>*:nth-child(1)]:w-[100px] [&>*:nth-child(1)]:h-100px [&>*:nth-child(2)]:w-[150px] [&>*:nth-child(2)]:h-[150px] [&>*:nth-child(2)]:m-7 [&>*:nth-child(3)]:w-[70px] [&>*:nth-child(3)]:h-[70px] min-[2000px]:[&>*:nth-child(2)]:w-[400px] min-[2000px]:[&>*:nth-child(2)]:h-[400px] min-[2000px]:[&>*:nth-child(3)]:w-[170px] min-[2000px]:[&>*:nth-child(3)]:h-[170px] min-[2000px]:[&>*:nth-child(1)]:w-[200px] min-[2000px]:[&>*:nth-child(1)]:h-[200px] max-[1200px]:w-full max-[1200px]:flex-row max-[1200px]:flex-wrap max-[1200px]:ml-0"
    >
      {[javascript, react, node].map((circle, index) => (
        <div
          className="circle-cmp app__flex w-full h-full flex items-center justify-center rounded-[50%] bg-white shadow-header"
          key={`circle-${index}`}
        >
          <img className="w-[60%] h-[60%] m-4" src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default Header;
