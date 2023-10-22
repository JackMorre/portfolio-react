import img from "../images/blackandwhiteJack.jpg";

export const AboutMe = () => {
  return (
    <section className="max-w-5xl mx-auto my-0 py-16">
      <h3 className="text-center text-2xl pb-12 text-teal-800 font-black">
        About Me
      </h3>
      <div className="flex justify-center items-center gap-4">
        <div className="w-1/2">
          <p className="text-center ">
            From a young age, I have always found my self to be a creative
            indivual but never really knew what I wanted to do. After a long
            time of working different job, I have found something that I can
            really sink my teeth into and that's coding! I'm not crazy and do do
            other things outside of coding like the following -
          </p>
          <ul className="flex flex-col items-center">
            <li>Working out</li>
            <li>Playing Dungeon And Dragons</li>
            <li>Making Bread/Pizza</li>
          </ul>
        </div>
        <div className="w-[16rem] h-[16rem] rounded-full overflow-hidden border-solid border-4 border-teal-600 shadow w-1/2">
          <img className="" src={img} alt="Profile of Jack"></img>
        </div>
      </div>
    </section>
  );
};
