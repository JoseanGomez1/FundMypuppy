// const headerImage =
//   "https://as1.ftcdn.net/v2/jpg/00/48/95/32/1000_F_48953239_NCYPlQhCP1A8ShBbbfBDOlK64HYQXIwl.jpg";

// const Header = ({ heroImage }) => {
//   return (
//     <header style={{ height: "360px", overflow: "hidden" }}>
//       <img style={{ width: "100%" }} src={heroImage || headerImage} />
//     </header>
//   );
// };

// export default Header;

import {Link} from 'react-router-dom'

// component level style import
import "./Header.css"
import { MainNav } from '../../Navigation'

const headerImage = "https://pennypaws.com/wp-content/uploads/2022/06/elena-mozhvilo-UspYqrVBsIo-unsplash-1-1080x675.jpg"

const brandImage = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"

const Nav = () => (
  <nav className="Nav">
      <Link to="/" >
          <img src={brandImage}/>
      </Link>
      <div>ThePuppyFund</div>
  </nav>
)

const Header = ({ heroImage }) => {
    return (
        <header style={{ minHeight: "33vmin", overflow: 'hidden'}}>
            <Nav/>
            <img style={{ width: "100%" }} src={ heroImage || headerImage } />
        </header>
    )
}

export default Header

