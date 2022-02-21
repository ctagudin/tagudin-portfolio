import {Row, Col, Container, OverlayTrigger, Tooltip} from 'react-bootstrap';
import gifhover from '../images/gifhover.gif'
import gifslide from '../images/gifslide.gif'
import giflogin from '../images/giflogin.gif'
import gifsearch from '../images/gifsearch.gif'

export default function Projects() {

	return (
					<div className="comp mt-4">
			<Container fluid >
				<Row className="pb-2 " >
					<Col md={1} ></Col>
					<Col md={10} className="lgrey d-flex align-items-center justify-content-center"  style={{height: '10vh'}} >
						<h2 className="pt-2">Portfolio</h2>
					</Col>					
				</Row>

				<Row className=" projHeight d-flex" >
					<Col md={1} ></Col>
					<Col md={5} className="bg-light" >
						<div className="text-center  ">
						<Row>
							<Col>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>Slide</Tooltip>
								} >
									
									<img className="img-fluid gifHeight popGif pb-2 px-2" src={gifslide} />
								</OverlayTrigger>
								
							</Col>
						</Row>
						<Row>
							<Col>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>Hover</Tooltip>
								} >
									
									<img className="img-fluid gifHeight popGif pb-2 px-2" src={gifhover} />
								</OverlayTrigger>
								
							</Col>
						</Row>
						</div>



						<p className="pt-2 px-5 " style={{fontSize: "0.9rem"}}>This Portfolio Application you are browsing now is made from scratch by me! This page uses HTML, CSS, and ReactJS, featuring a slick and minimalistic design, and smooth transitions and simple animations.</p>
						
					</Col>
					<Col md={5} className="bg-light" >
						<div className="text-center  ">
						<Row>
							<Col>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>Login</Tooltip>
								} >
									
									<img className="img-fluid gifHeight popGif pb-2 px-2" src={giflogin} />
								</OverlayTrigger>
								
							</Col>
						</Row>
						<Row>
							<Col>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>Search</Tooltip>
								} >
									
									<img className="img-fluid gifHeight popGif pb-2 px-2" src={gifsearch} />
								</OverlayTrigger>
								
							</Col>
						</Row>
						</div>



						<p className="pt-2 px-5 " style={{fontSize: "0.9rem"}} >A fully functional E-Commerce Application with a Login/Register, and Regular User and Administrator functions. It has a product page with a Search function; regular users have a Cart and can Checkout; Admins can update and remove items. Check out the <a href="https://zealous-swanson-df8204.netlify.app/">live demo</a> , hosted on Netlify.</p>
						
					</Col>
					<Col md={1} ></Col>
					
				</Row>
				
			</Container>
		</div>


		)

}