import { Link } from 'react-router-dom';

// receber um array de link e retornar uma navbar pronnta

const Navbar = (props) =>{
 const { links } = props  // destructor
  
  const linksComponents = links.map(_link => <Link style={{ padding:3}} to={_link.path}>{_link.title}</Link>  )

  return (
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        { linksComponents }
      </nav>
  )  

}


export default Navbar
