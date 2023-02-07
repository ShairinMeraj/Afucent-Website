import { Component } from "react";
import "./CareerStyles.css";

class Career extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="dest" src={this.props.img1} />
          <img alt="dest" src={this.props.img1} />
        </div>
      </div>
    );
  }
}
export default Career ;