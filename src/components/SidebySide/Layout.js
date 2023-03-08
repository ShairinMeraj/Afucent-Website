import "./Layout.css";
import second from "../../images/ab.jpg"
const Layout = () => {
  return (
    <div className="body">
    <div className="wrapper">
        <img className="lay" src={second} alt="pic"/>
        <div className="text-box">
          <div className="s-divi"><span>About Us</span></div>
            <h2>Helping organizations to enhance their digital experience</h2>
            <p>Afucent is a technology driven company with major focus in digital experience and marketing technologies.</p>
            <p>Our focus is to help organizations to reshape their business structure by leveraging advanced tools and making better use of scalable solutions.</p>

            <p>We have a strong team with different levels of expertise helping clients and providing solutions with a good mix of business and technology</p>
            <br/>
            
 
         </div>
    </div></div>
  );
};
export default Layout;
