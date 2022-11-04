
import { Nav } from '../nav/nav';

export const Header = () => {

    return (
    <header className="navbar">
        {/* <div className="nav-logo-container"> 
          <Logo />            
        </div> */}
        <nav className="nav-container"> 
            <Nav />
        </nav>
        {/* <div className="search-container" >
            <input type="text" placeholder="" onClick={this.handleClick.bind(this)} />
        </div> */}
      </header>
    )
}