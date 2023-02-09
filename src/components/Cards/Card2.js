import "./CardStyles.css";
import CardData from "./CardData";
import img1 from "../../images/five.jpg";
function Card2() {
  return (
    <div className="trip">
      <h1>Digital Transformation</h1>
      
      <div className="tripcard">
        <CardData
          image={img1}
          heading="Digital Strategy Solutions"
      
        />
        <CardData
          image={img1}
          heading="Digital Transformation Services"
    
        />
        
       
      </div>
    </div>
  );
}
export default Card2;