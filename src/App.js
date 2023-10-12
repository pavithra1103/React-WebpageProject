import React from 'react';
import './App.css';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Loginpage from './Loginpage';

import Base from './Base';

function App() {
  return (
   <Router>
    <div>
      <Routes>
        <Route path='/login' element ={<Loginpage/>}></Route>
       
        <Route path='/base' element ={<Base/>}></Route>
        

      </Routes>
        

    </div>
   </Router>
  );
}

export default App;
