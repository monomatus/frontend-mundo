import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Principal from './views/Principal'


function App() {
  return (
  <Router>
      <Routes>
        <Route exact path='/' element={<Principal/>}/>


      </Routes>
  </Router>
  );
}

export default App;
