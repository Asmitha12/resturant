import logo from './logo.svg';
import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">My New Fancy Resturant</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>

  );
}

export default App;
