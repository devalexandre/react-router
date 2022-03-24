import { Routes, Route } from 'react-router-dom'


const Routers = (props) =>(
  <Routes>
     {props.routes.map(route => <Route path={route.path} element={route.component} />)}
    </Routes>
     )

export default Routers
      


