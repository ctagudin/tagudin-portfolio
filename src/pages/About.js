import {Row, Col, Container} from 'react-bootstrap';

export default function About() {

	return (
			<div className="comp mt-4">
				<Container fluid>
					<Row className="pb-4" >
						<Col md={1} ></Col>
						<Col md={10} className="lgrey d-flex align-items-center justify-content-center"  style={{height: '10vh'}} >
							<h2 className="pt-2">About Me</h2>
						</Col>					
					</Row>
					<Row className="d-flex align-items-center mt-4" >
						<Col md={1} ></Col>
						<Col md={5} className=" " >
							<p className="pt-3 px-3">My name is Carlo Tagudin, and I currently reside in Metro Manila, Philippines. I have recently graduated from the Developer Program, a full-time coding bootcamp, by Zuitt.co. I am very eager to use my new skills to help you develop and refine your web applications!</p>
							<p className="pt-3 px-3">I have experienced web development in the front-end, working with technologies like CSS, HTML, Bootstrap, JavaScript, and ReactJS. And also managed to build a working back-end system with NodeJS, ExpressJS, and MongoDB as the database.  </p>
						</Col>
						<Col md={5} className="text-center" >
							<img src="https://lh3.googleusercontent.com/a-/AOh14GjGap2-00qFG5K-7yS2py5FaxUcPho8KBhOs7W-ZA=s360-p-rw-no" className=" img-fluid imgh rounded-circle " />
						</Col>
						
					</Row>
					
				</Container>
			</div>

		)

}