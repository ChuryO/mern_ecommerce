import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = (): React.ReactElement => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='py-3 text-center'>
						footer
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export { Footer }