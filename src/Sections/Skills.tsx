import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      name: "Git",
      bgColor: "#EDF2F8",
      icon: "/git.png",
    },
    {
      name: "React",
      bgColor: "#EDF2F8",
      icon: "/react.png",
    },
    {
      name: "Node",
      bgColor: "#EDF2F8",
      icon: "/node.png",
    },
    {
      name: "css",
      bgColor: "#EDF2F8",
      icon: "/css.png",
    },
    {
      name: "html",
      bgColor: "#EDF2F8",
      icon: "/html.png",
    },
    {
      name: "redux",
      bgColor: "#EDF2F8",
      icon: "/redux.png",
    },
    {
      name: "nest",
      bgColor: "#EDF2F8",
      icon: "/nest.png",
    },
    {
      name: "tailwind",
      bgColor: "#EDF2F8",
      icon: "/tailwind.png",
    },
    {
      name: "typescript",
      bgColor: "#EDF2F8",
      icon: "/typescript.png",
    },
    {
      name: "javascript",
      bgColor: "#EDF2F8",
      icon: "/javascript.png",
    },
  ];

  return (
    <>
      <div
        id="Habilidades"
        className="min-h-screen flex flex-1 w-full flex-col p-8 justify-center items-center"
      >
        <h2 className="head-text text-[2.75rem] font-extrabold text-center capitalize min-[2000px]:text-[4rem]">
         Habilidades
        </h2>

        <div className="app__skills-container w-[80%] mt-12 flex flex-row max-[900px]:w-full max-[900px]:flex-col">
          <motion.div className="app__skills-list flex flex-1 flex-wrap justify-center items-start mr-20 max-[900px]:mr-0 max-[900px]:justify-center max-[900px]:items-center">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex flex items-center justify-center flex-col text-center m-4 transition-all delay-[0.3] ease-in"
                key={skill.name}
              >
                <div
                  className="app__flex flex justify-center items-center w-[90px] h-[90px] rounded-[50%] bg-[#fef4f5] hover:shadow-skills min-[2000px]:w-[150px] min-[2000px]:h-[150px] max-[450px]:w-[70px] max-[450px]:h-[70px] min-[2000px]:my-4 min-[2000px]:mx-8"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img
                    className="w-[50%] h-[50%]"
                    src={skill.icon}
                    alt={skill.name}
                  />
                </div>
                <p className="p-text text-[0.8rem] text-left capitalize text-gray-400 leading-normal min-[2000px]:text-[1.75rem] font-medium mt-2 min-[2000px]:mt-4">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;
