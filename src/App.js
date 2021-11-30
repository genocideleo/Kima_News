import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './Components/Styles/Theme';
import Home from './Components/Home.js';
import Crime from './Components/Crime.js';
import Business from './Components/Business.js';
import Enter from './Components/Enter.js';
import Fash from './Components/Fash.js';
import Inter from './Components/Inter.js';
// import Landing from './Components/Topbar.js';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/crime' element={<Crime />}></Route>
            <Route exact path='/business' element={<Business />}></Route>
            <Route exact path='/entertainment' element={<Enter />}></Route>
            <Route exact path='/fashion' element={<Fash />}></Route>
            <Route exact path='/international' element={<Inter />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
