import CareerData from "./CareerData";
import "./CareerStyles.css";
import img1 from "../../images/five.jpg";
const Careers = () => {
  return (
    <div className="destination">
      <h1>Explore Opportunities</h1>
      <p>Tours give you the opportunity to live life to the fullest!</p>
      <CareerData
        className="first-des"
        heading="We are not just a technology company full of people, we're a people company full of technology. It is people like you who make us what we are today. Welcome to our world: Our people, our culture, our voices, and our passions."
        img1={img1}
      />
      <CareerData
        className="first-des-reverse"
        heading="Wherever you desire to go, we give you the tools, the techniques, and the teams to navigate the journey. So you’re inspired to build what’s next, ensure your career never stands still, and navigate further together. Move forward. Take the world with you."
        text=""
        img1={img1}
      />
    </div>
  );
};
export default Careers;
