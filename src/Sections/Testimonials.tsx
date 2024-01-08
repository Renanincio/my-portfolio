import { motion } from "framer-motion";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  const testimonials = [
    {
      imgurl: "/css.png",
      name: "Sara",
      feedback: "Micael is an awesome developer! I am a backend developer with a passion for building beautiful and functional web applications.",
      company: "Netflix",
    },
    {
        imgurl: "/html.png",
        name: "Michael",
        feedback: "I am a backend developer with a passion for building beautiful and functional web applications.I am a backend developer with a passion for building beautiful and functional web applications.",
        company: "Google",
      }
  ];

  const brands = [
    {
      imgUrl: "/nb.png",
      name: "new balance",
      id: 1
    },{
        imgUrl: "/bolt.png",
        name: "bolt",
        id: 2
      },{
        imgUrl: "/skype.png",
        name: "skype",
        id: 3
      },{
        imgUrl: "/spotify.png",
        name: "spotify",
        id: 4
      }
  ];

  return (
    <>
    <div id="testimonials" className="min-h-screen flex flex-1 w-full items-center justify-center flex-col p-8 bg-[#EDF2F8]">
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex flex items-center justify-center w-[60%] min-h-[320px] bg-white flex-row p-8 rounded-[15px] shadow-header transition-all delay-[0.3] ease-in-out min-[2000px]:min-h-[450px] max-[850px]:w-full">
            <img
              src={testimonials[currentIndex].imgurl}
              alt={testimonials[currentIndex].name}
              className="w-[100px] h-[100px] rounded-[50%] object-cover min-[2000px]:w-[150px] min-[2000px]:h-[150px]" 
            />
            <div className="app__testimonial-content flex-1 h-full py-0 px-8 text-left flex flex-col justify-around items-start max-[600px]:mt-8 max-[600px]:p-0">
              <p className="p-text text-[1.25rem] text-black leading-8 min-[2000px]:text-[2rem]   w-full uppercase min-[2000px]:leading-[3.5rem]">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text  text-base font-semibold mt-8 text-[#313BAC] text-left  min-[2000px]:text-[2rem] max-[450px]:text-[0.9rem]">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text text-[0.8rem] text-gray-400 mt-[5px] font-normal leading-normal min-[2000px]:text-[1.75rem]   w-full uppercase text-right">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex flex justify-center items-center flex-row m-4 ">
            <div
              className="app__flex flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-[50%] bg-white m-4 transition-all delay-[0.3] ease-in-out hover:bg-[#313BAC] hover:[&>*:nth-child(1)]:text-white min-[2000px]:w-[100px] min-[2000px]:h-[100px]"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft className="w-full h-full text-[#313BAC] min-[2000px]:w-[45px] min-[2000px]:h-[45px]" />
            </div>

            <div
              className="app__flex flex justify-center items-center w-[30px] h-[30px] cursor-pointer rounded-[50%] bg-white m-4 transition-all delay-[0.3] ease-in-out hover:bg-[#313BAC] hover:[&>*:nth-child(1)]:text-white min-[2000px]:w-[100px] min-[2000px]:h-[100px]"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight className="w-full h-full text-[#313BAC] min-[2000px]:w-[45px] min-[2000px]:h-[45px]" />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex flex justify-center items-center w-[80%] flex-wrap mt-8 max-[800px]:w-full">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand.id}
            className="w-[150px] m-6 hover:[&>*:nth-child(1)]:grayscale-0 min-[2000px]:w-[210px] min-[2000px]:m-8 max-[450px]:w-[120px] max-[450px]:m-4"
          >
            <img className="w-full h-auto object-cover grayscale-[1]" src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Testimonials;
