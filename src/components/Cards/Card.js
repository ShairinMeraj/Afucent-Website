import "./CardStyles.css";
import CardData from "./CardData";
import img1 from "../../images/six.jpg";
function Card() {
  return (
    <div className="trip">
      <h1> Marketing Technologies Practice</h1>
      
      <div className="tripcard">
        <CardData
          image={img1}
          heading="Data & Insights"
          text="-Digital Analytics"
        />
        <CardData
          image={img1}
          heading="Marketing Automation"
          text="Lead Management"
          text2="Personalization"
          text3="Campaign Management"
        />
        
       
      </div>
    </div>
  );
}
export default Card;