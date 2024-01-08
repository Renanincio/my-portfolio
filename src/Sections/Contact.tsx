const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="p-8 flex-1 flex w-full flex-col max-[768px]:flex-col justify-center items-center"
      >
        <h2 className="head-text text-[2.75rem] font-extrabold text-center capitalize min-[2000px]:text-[4rem]">
          Take a coffee & chat with me
        </h2>

        <div className="app__footer-cards w-[60%] flex justify-evenly items-center flex-wrap mt-16 mr-8 mb-8 max-[768px]:w-full">
          <div className="app__footer-card min-w-[290px] flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-[10px] cursor-pointer bg-[#fef4f5] transition-all delay-[0.3] ease-in-out hover:shadow-skills max-[450px]:w-full">
            <img
              className="w-[40px] h-[40px] my-0 mx-[0.7rem]"
              src="/email.png"
              alt="email"
            />
            <a
              href="mailto:hello@micael.com"
              className="p-text no-underline text-[0.8rem] text-gray-400 leading-normal min-[2000px]:text-[1.75rem]   w-full uppercase text-center"
            >
              hello@micael.com
            </a>
          </div>
          <div className="app__footer-card min-w-[290px] flex flex-row justify-start items-center my-4 mx-0 p-4 rounded-[10px] cursor-pointer bg-[#fef4f5] transition-all delay-[0.3] ease-in-out hover:shadow-skills max-[450px]:w-full">
            <img className="w-[40px] h-[40px] my-0 mx-[0.7rem]" src="/mobile.png" alt="phone" />
            <a
              href="tel:+1 (123) 456-7890"
              className="p-text no-underline text-[0.8rem] text-gray-400 leading-normal min-[2000px]:text-[1.75rem]   w-full uppercase text-center"
            >
              +1 (123) 456-7890
            </a>
          </div>
        </div>
        <div className="app__footer-form app__flex flex justify-center items-center w-[60%] flex-col my-4 mx-8 max-[768px]:w-full max-[768px]:my-4 max-[768px]:mx-0">
          <div className="app__flex flex justify-center items-center w-full my-[0.75rem] mx-0 rounded-[10px] cursor-pointer bg-gray-400 transition-all delay-[0.3] ease-in-out hover:shadow-skills">
            <input
              className="p-text text-[0.8rem] leading-normal min-[2000px]:text-[1.75rem]   w-full uppercase text-start p-[0.95rem] border-none rounded-[7px] bg-slate-100 text-[#313bac] outline-none"
              type="text"
              placeholder="Your Name"
              name="username"
            />
          </div>
          <div className="app__flex flex justify-center items-center w-full my-[0.75rem] mx-0 rounded-[10px] cursor-pointer bg-slate-100 transition-all delay-[0.3] ease-in-out hover:shadow-skills">
            <input
              className="p-text text-[0.8rem] leading-normal min-[2000px]:text-[1.75rem]   w-full uppercase text-start p-[0.95rem] border-none rounded-[7px] bg-slate-100 text-[#313bac] outline-none"
              type="email"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div className="app__flex flex justify-center items-center w-full my-[0.75rem] mx-0 rounded-[10px] cursor-pointer bg-slate-100 transition-all delay-[0.3] ease-in-out hover:shadow-skills">
            <textarea
              className="p-text text-[0.8rem] leading-normal min-[2000px]:text-[1.75rem] w-full uppercase text-start p-[0.95rem] border-none rounded-[7px] bg-slate-100 text-[#313bac] outline-none h-[170px]"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <button
            type="button"
            className="p-text text-[0.8rem] text-white leading-normal min-[2000px]:text-[1.75rem] uppercase text-center py-4 px-8 rounded-[10px] border-none bg-[#313bac] outline-none mt-8 mr-0 mb-0 ml-0 transition-footer cursor-pointer hover:bg-[#2430af]"
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
