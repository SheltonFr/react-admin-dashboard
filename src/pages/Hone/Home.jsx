import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          Home Container
        </div>
    </div>
  )
}

export default Home