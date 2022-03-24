import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

import Navbar from './components/navbar'

import _links from './routes'

const App = () => (
    <div>
      <h1>Bookkeeper</h1>
      <Navbar links={_links} />
    </div>
  );

export default App;
