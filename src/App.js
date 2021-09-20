import './App.css';
import initDataLocalStorage from './Database/database';
import Products from './components/Products/Products';

function App() {
  // init data to LocalStorage
  initDataLocalStorage();

  return (
    <Products></Products>
  );
}

export default App;
