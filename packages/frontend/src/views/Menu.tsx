import '../css/App.css';
import Search from './Search';
import NavBar from '../components/NavBar';

function Menu() {
  return (
    <div className="Menu">
      <NavBar></NavBar>
      <Search></Search>
    </div>
  );
}

export default Menu;