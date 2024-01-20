import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import MyNavbar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <MyNavbar/>
      <Banner/>
      <Skills/>
    </div>
      
  );
}

export default App;
