import {Row, Col, Container, OverlayTrigger, Tooltip} from 'react-bootstrap';
import gifhover from '../images/gifhover.gif'
import gifslide from '../images/gifslide.gif'
import giflogin from '../images/giflogin.gif'
import gifsearch from '../images/gifsearch.gif'

export default function Test() {

	return (
			
		<div className="comp mt-4">
			<Container fluid >
				<Row className="pb-2 " >
					<Col md={1} ></Col>
					<Col md={10} className="lgrey d-flex align-items-center justify-content-center"  style={{height: '10vh'}} >
						<h2 className="pt-2">Portfolio</h2>
					</Col>					
				</Row>

				<Row className=" projHeight d-flex align-items-center" >
					<Col md={1} ></Col>
					<Col md={5} className="" >
						<div className="text-center  ">
						<Row>
							<Col>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>HTML</Tooltip>
								} >
									
									<img className="img-fluid gifHeight pop pb-2 px-2" src={gifslide} />
								</OverlayTrigger>
								
							</Col>
						</Row>
						<Row>
							<Col>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>HTML</Tooltip>
								} >
									
									<img className="img-fluid gifHeight pop pb-2 px-2" src={gifhover} />
								</OverlayTrigger>
								
							</Col>
						</Row>
						</div>



						<p className="pt-2 px-5 ">I have experience in front-end web development, working with technologies like AJAX, Bootstrap, CSS, HTML, JavaScript, JSON, Materialize.css, Node.JS, and various other modern development media.</p>
						
					</Col>
					<Col md={5} className="" >
						<div className="text-center  ">
						<Row>
							<Col>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>HTML</Tooltip>
								} >
									
									<img className="img-fluid gifHeight pop pb-2 px-2" src={giflogin} />
								</OverlayTrigger>
								
							</Col>
						</Row>
						<Row>
							<Col>
								<OverlayTrigger placement="top" overlay={
									<Tooltip>HTML</Tooltip>
								} >
									
									<img className="img-fluid gifHeight pop pb-2 px-2" src={gifsearch} />
								</OverlayTrigger>
								
							</Col>
						</Row>
						</div>



						<p className="pt-2 px-5 ">I have experience in front-end web development, working with technologies like AJAX, Bootstrap, CSS, HTML, JavaScript, JSON, Materialize.css, Node.JS, and various other modern development media.</p>
						
					</Col>
					<Col md={1} ></Col>
					
				</Row>
				
			</Container>
		</div>

		)

}