import JackHero from "../images/img.jpg";

export const Hero = () => {
  return (
    <div
      className="flex max-w-5xl mx-auto my-0 py-16 justify-between items-center"
      aria-label="hero section "
    >
      <div className="max-w-md h-[28rem] rounded-full overflow-hidden border-solid border-4 border-teal-600 shadow">
        <img src={JackHero} className="w-screen -translate-x-56 hero-img"></img>
      </div>
      <div className="flex justify-center items-center flex-col max-w-sm h-[24rem] bg-gradient-to-tr from-teal-700 to-teal-600 rounded-full shadow ">
        <h1 className="text-4xl text-center text-white font-black">
          Hi, my names Jack.
        </h1>
        <h2 className="text-2xl text-center text-white w-10/12 font-main">
          A front-end developer with a strong focus on exceptional user
          experience{" "}
        </h2>
      </div>
    </div>
  );
};
