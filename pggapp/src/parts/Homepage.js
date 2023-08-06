import { Link } from 'react-router-dom';
import './Homepage.css'
function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <h2>To be done!</h2>
      <p className="homepagelink"><Link  to="/library">Library</Link></p>
    </div>
  )
}

export default HomePage;