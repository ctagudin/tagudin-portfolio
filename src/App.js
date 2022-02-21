import Name from './components/Name'
import AppNavbar from './components/AppNavBar';
import Home from './pages/Home';
import About from './pages/About'
import Projects from './pages/Projects'
import Tools from './pages/Tools'
import Test from './pages/Test'


import {BrowserRouter as Router} from 'react-router-dom' 
import {Routes, Route, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {Container} from 'react-bootstrap';

import './App.css';


const AnimatedSwitch = () => {
  const location = useLocation();


  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000} >
        <Routes location={location}>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};


function App() {


  return (
    <>
      <Router>
        <div className="wooo">
          <Name />
          <AppNavbar />        
        </div>
        <div className="spacer mb-4"></div>
        <AnimatedSwitch />



{/*        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>*/}
      </Router>
    </>
  );
}

export default App;
