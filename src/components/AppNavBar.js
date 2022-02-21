import {Nav, Navbar, Row, Col, Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About'
import Projects from '../pages/Projects'
import Tools from '../pages/Tools'

import { CSSTransition } from 'react-transition-group'


const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/projects', name: 'Portfolio', Component: Projects },
  { path: '/tools', name: 'Tools', Component: Tools }
]	

export default function AppNavbar() {

	return (

		<Navbar bg="dark" variant="dark">
		  <Container>
		  <Nav className="me-auto">
		  	{routes.map(route => (
		  	  <Nav.Link
		  	    key={route.path}
		  	    as={NavLink}
		  	    to={route.path}

		  	  >
		  	    {route.name}
		  	  </Nav.Link>
		  	))}


{/*		  	<Link to="/" className= "nav-link">Home</Link>
		    <Link to="/about" className= "nav-link">About</Link>
		    <Link to="/projects" className="nav-link">Projects</Link>
		    <Link to="/tools" className="nav-link">Tools</Link>*/}
		  </Nav>
		  </Container>
		</Navbar>

		)

}