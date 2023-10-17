import img from "../images/img.jpg";

export const Introduction = () => {
  return (
    <div>
      <img src={img} alt="Profile of Jack" height={"200px"}></img>
      <h1>Hello, I am an Introduction</h1>
    </div>
  );
};
