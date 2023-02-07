import "./CardStyles.css";
function CardData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="trips" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <p>{props.text2}</p>
      <p>{props.text3}</p>
    </div>
  );
}
export default CardData;
