import { motion } from "framer-motion";

const About = () => {
  const abouts = [
    {
      title: "backend developer",
      imgUrl: "/about04.png",
      desc: "I am a backend developer with a passion for building beautiful and functional web applications.",
    },
    {
      title: "frontend developer",
      imgUrl: "/about01.png",
      desc: "I am a frontend developer with a passion for building beautiful and functional web applications.",
    },
    {
      title: "react native developer",
      imgUrl: "/about03.png",
      desc: "I am a React Native developer with a passion for building beautiful and functional mobile applications.",
    },
  ];

  return (
    <>
      <div
        id="about"
        className="flex flex-1 w-full flex-col justify-center items-center min-h-screen p-8"
      >
        <h2 className="head-text text-[2.75rem] font-extrabold text-center capitalize min-[2000px]:text-[4rem]">
          I Know that <span className="text-[#313BAC]">Good Design</span> <br />
          means <span className="text-[#313BAC]">Good Business</span>
        </h2>

        <div className="app__profiles flex justify-center items-start flex-wrap mt-8">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item w-[190px] flex justify-start items-start flex-col m-8 min-[2000px]:w-full min-[2000px]:my-8 min-[2000px]:mx-16"
              key={about.title + index}
            >
              <img
                className="w-full h-[170px] rounded-[15px] object-cover min-[2000px]:h-[320px]"
                src={about.imgUrl}
                alt={about.title}
              />
              <h2
                className="bold-text capitalize text-base font-semibold text-black text-left  min-[2000px]:text-[2rem] max-[450px]:text-[0.9rem]"
                style={{ marginTop: 20 }}
              >
                {about.title}
              </h2>
              <p className="text-[0.8rem] text-gray-400 leading-normal min-[2000px]:text-[1.75rem]   w-full uppercase text-start mt-4">
                {about.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
