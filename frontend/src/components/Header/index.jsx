// import {Link} from 'react-router-dom'
// import { MainNav } from "../../Navigation/MainNav";
// const headerImage =
//   "https://as1.ftcdn.net/v2/jpg/00/48/95/32/1000_F_48953239_NCYPlQhCP1A8ShBbbfBDOlK64HYQXIwl.jpg";


// const Header = ({ heroImage }) => {
//   return (
//     <header style={{ height: "360px", overflow: "hidden" }}>
//       <MainNav />
//       <img style={{ width: "100%" }} src={heroImage || headerImage} />
//     </header>
//   );
// };
 
// export default Header;

// import {Link} from 'react-router-dom'

// // component level style import
// import { MainNav } from '../../Navigation'

// const headerImage = "https://pennypaws.com/wp-content/uploads/2022/06/elena-mozhvilo-UspYqrVBsIo-unsplash-1-1080x675.jpg"

// const brandImage = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"

// const Nav = () => (
//   <nav className="Nav">
//       <Link to="/" >
//           <img src={brandImage}/>
//       </Link>
//       <div>ThePuppyFund</div>
//   </nav>
// )

// const Header = ({ heroImage }) => {
//     return (
//         <header style={{ minHeight: "33vmin", overflow: 'hidden'}}>
//             <Nav/>
//             <img style={{ width: "100%" }} src={ heroImage || headerImage } />
//         </header>
//     )
// }

// export default Header



// const headerFallback = "https://as1.ftcdn.net/v2/jpg/00/48/95/32/1000_F_48953239_NCYPlQhCP1A8ShBbbfBDOlK64HYQXIwl.jpg"
// import { MainNav } from "../../Navigation"


// export default function Header({heroimage}){
//   return
//   <header style={{ height: "20rem", overflow: "hidden"}}>
//     <img
//     src={heroImage || headerFallback}
//     style={{width: '100%',}}
//     />
//     </header>
//     )
// }

// import {Link} from 'react-router-dom'

// // component level style import
// import "./Header.css"

// const headerImage = "https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?b=1&k=20&m=1146473249&s=612x612&w=0&h=-q1guVCuei7X3BFKwWC2bLUOX8BeIaC04pG5s_xfn_c="

// const brandImage = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"

// const Nav = () => (
//     return (<nav className="Nav">
//         <Link to="/" >
// 	        <img src={brandImage}/>
//         </Link>
//         <div>People App</div>
//     </nav>)
// )

// const Header = ({ heroImage }) => {
//     return (
//         <header style={{ minHeight: "33vmin", overflow: 'hidden'}}>
//             <Nav/>
//             <img style={{ width: "100%" }} src={ heroImage || headerImage } />
//         </header>
//     )
// }

// export default Header



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