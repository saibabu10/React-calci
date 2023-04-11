import './App.css';
import {BrowserRouter as Router,Link,Routes,Route } from "react-router-dom";
import Portfolio from './Component/Routes/Portfolio Component/Portfolio';
import Calculator from './Component/Routes/Calculator Component/Calculator';
import Cartoon from './Component/Routes/Cartoon Component/Cartoon';

function App() {
  return (
    <Router>
    <div className='App'>
     <Link to="/">Portfolio</Link>
     <Link to="/Calculator">Calculator</Link>
     <Link to="/Cartoon">Axios</Link>
    </div>
    <Routes>
      <Route exact path='/' element={<Portfolio/>}></Route>
      <Route exact path='/Calculator' element={<Calculator/>}></Route>
      <Route exact path='/Cartoon' element={<Cartoon/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
