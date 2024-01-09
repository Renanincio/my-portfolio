import { motion } from "framer-motion";

const About = () => {
  const abouts = [
    {
      title: "Desenvolvedor back-end",
      imgUrl: "/about04.png"
    },
    {
      title: "Desenvolvedor front-end",
      imgUrl: "/about02.png"
    },
    {
      title: "Desenvolvedor react native",
      imgUrl: "/about01.png"
    },
  ];

  return (
    <>
      <div
        id="Sobre"
        className="flex flex-1 w-full flex-col justify-center items-center min-h-screen p-8"
      >
        <h2 className="head-text text-[2.75rem] font-extrabold text-center capitalize min-[2000px]:text-[4rem]">
          Eu sei que <span className="text-[#313BAC]">Bons aplicativos</span> <br />
          siginificam <span className="text-[#313BAC]">bons negócios</span>
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
              
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
