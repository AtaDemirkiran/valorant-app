import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Weapons  from './components/Weapons';
import Agents from './components/Agents';
import Maps from './components/Maps';
import AgentDetail from './components/AgentDetail';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router> 
          <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/agents' element={<Agents/>} />
              <Route path='/maps' element={<Maps/>} />
              <Route path='/weapons' element={<Weapons/>}/>
              <Route path='/agents/:uuid' element={<AgentDetail/>}/>
              <Route path='*' element={<NotFound/>} />
            </Routes>
            
    </Router>
  );
}

export default App;
