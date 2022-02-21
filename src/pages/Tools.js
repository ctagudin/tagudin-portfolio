import {Row, Col, Container, OverlayTrigger, Tooltip} from 'react-bootstrap';
import htmllogo from '../images/logo-html5.png';
import jslogo from '../images/logo-javascript.png';
import css3logo from '../images/logo-css3.png';
import bootstraplogo from '../images/logo-bootstrap.png';
import mongologo from '../images/logo-mongodb.png';
import expresslogo from '../images/logo-expressjs.png';
import reactlogo from '../images/logo-react.png';
import nodelogo from '../images/logo-nodejs.png';
import postmanlogo from '../images/logo-postman.png';
import herokulogo from '../images/logo-heroku.png';
import gitlogo from '../images/logo-git.png';
import sublimelogo from '../images/logo-sublime-text-3.png';

export default function Tools() {

	return (
			<div className="comp mt-4">
				<Container fluid>
					<Row className="pb-4" >
						<Col md={1} ></Col>
						<Col md={10} className="lgrey d-flex align-items-center justify-content-center"  style={{height: '10vh'}} >
							<h2 className="pt-2">My Current Toolset</h2>
						</Col>					
					</Row>
					<Row className="d-flex justify-content-center mt-4" >

						<Col md={3} className="mx-4">
							<h4 className="text-center py-4">Front-End</h4>
							<div className="text-center ">
								<OverlayTrigger placement="top" overlay={
									<Tooltip>HTML</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={htmllogo} />
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>Javascript</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={jslogo} />
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>CSS</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={css3logo} />
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>Bootstrap</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={bootstraplogo} />
								</OverlayTrigger>
							</div>
						</Col>
						<Col md={3} className="mx-4">
							<h4 className="text-center py-4">MERN Stack</h4>
							<div className="text-center ">
								<OverlayTrigger placement="top" overlay={
									<Tooltip>MongoDB</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={mongologo} />
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>ExpressJS</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={expresslogo} />
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>ReactJS</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={reactlogo} />
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>NodeJS</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={nodelogo} />
								</OverlayTrigger>
							</div>
						</Col>
						<Col md={3} className="mx-4">
							<h4 className="text-center py-4">Others</h4>
							<div className="text-center">
								<OverlayTrigger placement="top" overlay={
									<Tooltip>Git</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={gitlogo} />
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>Postman</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={postmanlogo} />
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>Heroku</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={herokulogo} />
								</OverlayTrigger>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>Sublime Text</Tooltip>
								} >
									
									<img className="pop iconHeight m-2" src={sublimelogo} />
								</OverlayTrigger>
							</div>
						</Col>
						
					</Row>
					
				</Container>
			</div>


		)

}