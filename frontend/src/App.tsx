import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap'

import { Header, Footer, Home, ProductPage } from '~/components'


function App(): React.ReactElement {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/" component={ Home } exact />
					<Route path="/product/:id" component={ ProductPage } />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
