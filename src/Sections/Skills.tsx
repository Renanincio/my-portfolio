import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";

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
      name: "Figma",
      bgColor: "#EDF2F8",
      icon: "/figma.png",
    },
    {
      name: "Flutter",
      bgColor: "#EDF2F8",
      icon: "/flutter.png",
    },
  ];
  const experiences = [
    {
      year: "2020",
      works: [
        {
          name: "Desenvolvedor Front-end",
          company: "Google",
          desc: "desc",
        },
        {
          name: "Blockchain",
          company: "Facebook",
          desc: "desc",
        },
      ],
    },
    {
      year: "2021",
      works: [
        {
          name: "Desenvolvedor back-end",
          company: "meta",
          desc: "desc",
        },
      ],
    },
  ];

  return (
    <>
      <div id="skills" className="min-h-screen flex flex-1 w-full flex-col p-8 justify-center items-center">
        <h2 className="head-text text-[2.75rem] font-extrabold text-center capitalize min-[2000px]:text-[4rem]">
          Skills & Experiences
        </h2>

        <div className="app__skills-container w-[80%] mt-12 flex flex-row max-[900px]:w-full max-[900px]:flex-col">
          <motion.div className="app__skills-list flex flex-1 flex-wrap justify-start items-start mr-20 max-[900px]:mr-0 max-[900px]:justify-center max-[900px]:items-center">
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
                <p className="p-text text-[0.8rem] text-left text-gray-400 leading-normal min-[2000px]:text-[1.75rem] font-medium mt-2 min-[2000px]:mt-4">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <div className="app__skills-exp flex flex-1 justify-start items-start flex-col max-[900px]:mt-8">
            {experiences.map((experience) => (
              <motion.div
                className="app__skills-exp-item w-full flex flex-row justify-start items-start my-4 mx-0"
                key={experience.year}
              >
                <div className="app__skills-exp-year mr-12 max-[450px]:mr-4">
                  <p className="bold-text text-base font-semibold text-[#313BAC] text-left  min-[2000px]:text-[2rem] max-[450px]:text-[0.9rem]">
                    {experience.year}
                  </p>
                </div>
                <motion.div className="app__skills-exp-works flex-1">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work flex flex-col justify-start items-start mt-4 cursor-pointer"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text text-base font-semibold text-black text-left  min-[2000px]:text-[2rem] max-[450px]:text-[0.9rem] ">
                          {work.name}
                        </h4>
                        <p className="p-text text-[0.8rem] text-left text-gray-400 leading-normal min-[2000px]:text-[1.75rem] min-[2000px]:mt-4 font-normal mt-1">
                          {work.company}
                        </p>
                      </motion.div>

                      <Tooltip
                        id={work.name}
                        arrowColor="#fff"
                        className="skills-tooltip max-w-[300px] bg-white shadow-header rounded-[5px] p-4 text-gray-400 text-center leading-normal opacity-[1] min-[2000px]:text-[1.75rem] min-[2000px]:max-w-[500px] min-[2000px]:leading-loose"
                      >
                        {work.desc}
                      </Tooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
