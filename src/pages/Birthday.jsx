import tabu_web from '../tabu_web.jpg'
import './Birthday.css'
const Birthday = () => {
console.log(tabu_web)
    return (
      <div className="photo">
          <img className='image' src={tabu_web} alt="wait my love" />
      </div>
    );

}

export default Birthday;