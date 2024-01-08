import { motion } from "framer-motion";
import { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const works = [
    {
      name: "Modern UI/UX Website",
      projectLink: "link",
      description: "A modern UI/UX Portfolio Website",
      imgUrl: "/about03.png",
      codeLink: "link",
      title: "Modern UI/UX Website",
      tags: "UI/UX",
    },
    {
      name: "Modern UI/UX Website",
      projectLink: "link",
      description: "A modern UI/UX Portfolio Website",
      imgUrl: "/about03.png",
      codeLink: "link",
      title: "Modern UI/UX Website",
      tags: "UI/UX",
    },
    {
      name: "Modern UI/UX Website",
      projectLink: "link",
      description: "A modern UI/UX Portfolio Website",
      imgUrl: "/about03.png",
      codeLink: "link",
      title: "Modern UI/UX Website",
      tags: "UI/UX",
    },
  ];

  return (
    <>
      <div id="work" className="flex justify-center items-centerflex-1 w-full flex-col bg-[#EDF2F8] min-h-screen p-8">
        <h2 className="head-text text-[2.75rem] font-extrabold text-center capitalize min-[2000px]:text-[4rem]">
          My Creative <span className="text-[#313BAC]">Portfolio</span> Section
        </h2>

        <div className="app__work-filter flex flex-row justify-center items-center flex-wrap mt-16 mr-0 mb-8">
          {["Front-End", "React Native", "Server"].map((item, index) => (
            <div
              key={index}
              className=" py-2 px-4 rounded-lg bg-white text-black font-extrabold cursor-pointer transition-all ease-in delay-[0.3] m-2 hover:bg-[#313BAC] hover:text-white min-[2000px]:py-4 min-[2000px]:px-8 min-[2000px]:rounded-[0.85rem]"
            >
              {item}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio flex flex-wrap justify-center items-center"
        >
          {works.map((work, index) => (
            <div
              className="app__work-item app__flex flex justify-center items-center w-[270px] flex-col m-8 p-4 rounded-lg bg-white text-black cursor-pointer transition-all delay-[0.3] ease-in hover:shadow-header min-[2000px]:w-[470px] min-[2000px]:p-[1.25rem] min-[2000px]:rounded-[0.75rem] max-[300px]:w-full max-[300px]:m-4"
              key={index}
            >
              <div className="app__work-img app__flex flex justify-center items-center w-full h-[230px] relative min-[2000px]:h-[350px]">
                <img
                  className="w-full h-full rounded-lg object-cover"
                  src={work.imgUrl}
                  alt={work.name}
                />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex flex justify-center items-center absolute top-0 left-0 right-0 w-full h-full bg-[rgba(0, 0, 0, 0.5)] rounded-lg opacity-0 transition-all ease-in delay-[0.3]"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#313BAC] text-white m-4 font-semibold cursor-pointer transition-all delay-[0.3s] ease-in"
                    >
                      <AiFillEye className="w-[50%] h-[50%]" />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex flex justify-center items-center w-[50px] h-[50px] rounded-[50%] bg-[#313BAC] text-white m-4 font-semibold cursor-pointer transition-all delay-[0.3s] ease-in"
                    >
                      <AiFillGithub className="w-[50%] h-[50%]" />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex flex justify-center items-center p-2 w-full relative flex-col">
                <h4 className="bold-text mt-4 leading-6 text-base font-semibold text-black text-left min-[2000px]:mt-[3rem] min-[2000px]:text-[2rem] max-[450px]:text-[0.9rem]">
                  {work.title}
                </h4>
                <p className="p-text text-[0.8rem] text-gray-400 leading-normal min-[2000px]:text-[1.75rem]   w-full uppercase text-center" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className="app__work-tag app__flex flex justify-center items-center absolute py-2 px-4 rounded-[10px] bg-white top-[-25px] text-center">
                  <p className="p-text text-[0.8rem] text-gray-400 leading-normal min-[2000px]:text-[1.75rem]   w-full uppercase text-right">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Work;
