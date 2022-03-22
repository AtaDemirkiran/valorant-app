import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Weapons  from './components/Weapons';
import Agents from './components/Agents';
import Maps from './components/Maps';
function App() {
  return (
    <Router> 
      <div>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/agents' element={<Agents/>} />
              <Route path='/maps' element={<Maps/>} />
              <Route path='/weapons' element={<Weapons/>}/>
            </Routes>
      </div>
    </Router>
  );
}

export default App;
