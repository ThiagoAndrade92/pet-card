//Css
import './Header.css';

//React Router
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
        <div className="container">
            <nav className="nav d-flex aligin-items-center justify-content-center p-1">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </nav>
        </div>{/* container */}

    </header>
  )
}

export default Header