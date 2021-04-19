import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'

import { RatingComponent } from '~/components'

import { MATCH_PRARMS_ID, IProductProps } from '~/components/productPage'

const ProductPage = ({ match }: RouteComponentProps<MATCH_PRARMS_ID>): React.ReactElement => {
	const initProduct = {
		_id: '',
		name: '',
		image: '',
		price: 0,
		rating: 0,
		numReviews: 0,
		description: '',
		brand: '',
		category: '',
		countInStock: 0,
	}

	const [ product, setProduct ] = useState<IProductProps>(initProduct)

	useEffect(() => {
		const fetchProduct = async () => {
			const { data }: AxiosResponse = await axios.get(`/api/product/${ match.params.id }`)
			setProduct(data)
		}

		fetchProduct()
	}, [ match ])

	const {
		name,
		image,
		price,
		rating,
		numReviews,
		description,
		countInStock,
	} = product

	return (
		<>
			<Link className="btn btn-light my-2" to="/">Go back</Link>
			<Row>
				<Col md={ 6 }>
					<Image src={ image } alt={ name } fluid />
				</Col>
				<Col md={ 3 }>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{ name }</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<RatingComponent value={ rating } text={ `${ numReviews } reviews` } />
						</ListGroup.Item>
						<ListGroup.Item>
							Price: { price }
						</ListGroup.Item>
						<ListGroup.Item>
							Description: { description }
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={ 3 }>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col className="font-weight-bold">${ price }</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>{ countInStock > 0 ? 'In Stock' : 'Out of Stock' }</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className="btn-block"
									type="button"
									disabled={ countInStock === 0 }
								>
									Add to cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export { ProductPage }
