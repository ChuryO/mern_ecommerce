import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = (): React.ReactElement => {
	return (
		<header>
			<Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>Shop</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<LinkContainer to="/cart">
								<Nav.Link><i className="fas fa-shopping-cart"></i> Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/login">
								<Nav.Link><i className="fas fa-user"></i> Sign in</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export { Header }