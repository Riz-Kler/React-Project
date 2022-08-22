import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Organisation} from './Organisation';
import {Navigation} from './Navigation';

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       React JS Exercise by Rizwan Kler
     </h3>

     <Navigation/>

     <Routes>
       <Route path='/' component={Home} exact/>
       <Route path='/organisation' component={Organisation}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
