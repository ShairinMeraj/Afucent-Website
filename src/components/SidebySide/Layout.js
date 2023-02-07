import "./Layout.css";
import second from "../../images/implement.jpg"
const Layout = () => {
  return (
    <div className="body">
    <div className="wrapper">
        <img className="lay" src={second} alt="pic"/>
        <div className="text-box">
            <h2>Managed Services</h2>
            <p> "p1:- Migration of CMS systems',
  p2:'- Migration of Ecommerce sites',
  p3: '- Analytics setup and report creation',"</p>
 
        </div>
    </div></div>
  );
};
export default Layout;
