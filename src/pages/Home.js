import { Link } from "react-router-dom";
import './Home.css'
const Home = () =>{
    return(
      <div>
        <div className="alert alert-primary" role="alert">
          <h1>Hey Baby !</h1>
        </div>
      
        <div>
            <Link to="/birthday"> <button className="button" >Click Me Dear</button> </Link>
        </div>
      </div>
    );
}

export default Home;