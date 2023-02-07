import AOS from "aos";
import Home from "../routes/index";
import 'aos/dist/aos.css';
function ScrollAnimation(){
    useEffect(()=>{
      AOS.init({duration: 2000});
    },[])
    return (
        <Home/>
    )
  }