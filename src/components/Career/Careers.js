import CareerData from "./CareerData";
import "./CareerStyles.css";
import img1 from "../../images/ServiceBanner.jpeg";
import img2 from "../../images/care.jpeg"
import img3 from "../../images/career.png";
import img4 from "../../images/life.webp";

const Careers = () => {
  return (
    <div className="destination">
      <h1>Explore Opportunities</h1>
      
      <CareerData
        className="first-des"
        heading="We are not just a technology company full of people, we're a people company full of technology. It is people like you who make us what we are today. Welcome to our world: Our people, our culture, our voices, and our passions."
        img1={img2}
        img2={img3}
      />
      <CareerData
        className="first-des-reverse"
        heading="Wherever you desire to go, we give you the tools, the techniques, and the teams to navigate the journey. So you’re inspired to build what’s next, ensure your career never stands still, and navigate further together. Move forward. Take the world with you."
        text=""
        img1={img1}
        img2={img4}
      />
    </div>
  );
};
export default Careers;
