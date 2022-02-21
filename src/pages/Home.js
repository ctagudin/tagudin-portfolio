import {Row, Col, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function Home() {

	return (
			<div className="d-flex align-items-center comp mt-4">
				<Container fluid>
					<Row className="align-items-center">
						<Col md={1} ></Col>
						<Col md={7} className="align-items-center" >
							<p className="" style={{fontSize: "4.5rem"}}>Hi! My name is </p>
							<p className="" style={{fontSize: "4.5rem"}}>Carlo! :D</p>
							<p className="" style={{fontSize: "1.5rem"}}>Let's connect and work together!</p>
							<div className="pt-2">
								<a href="https://github.com/ctagudin" target="_blank">
									<FontAwesomeIcon className="px-4 pop faBlack" size="2x" icon={faGithub} ></FontAwesomeIcon>
								</a>
								<a href="https://gitlab.com/ctagudin" target="_blank">
									<FontAwesomeIcon className="px-4 pop faBlack" size="2x" icon={faGitlab} ></FontAwesomeIcon>
								</a>
								<a href="https://www.linkedin.com/in/ctagudin/" target="_blank">
									<FontAwesomeIcon className="px-4 pop faBlack" size="2x" icon={faLinkedin} ></FontAwesomeIcon>
								</a>					
							</div>
						</Col>
						<Col md={3} className="" >
						
						</Col>
						<Col md={1} ></Col>
					</Row>
					
				</Container>
			</div>

		)

}