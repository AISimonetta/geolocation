import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div className='home home__linear-gradient'>
     <Link to='../UserLocation/UserLocation.tsx'><button>My Location</button></Link>
     <Link to='../Weather/Weather.tsx'><button>Today's weather</button></Link>
     <Link to='../ToDoList/ToDoList.scss'><button>Today's to do list</button></Link>
      
    </div>
  )
}

export default Home