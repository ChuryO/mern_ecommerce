import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import { RatingComponent, IProductCardProps } from '~/components/core'


const ProductCard = (props: IProductCardProps): React.ReactElement => {
	const { _id, name, image, price, rating, numReviews } = props

	return (
		<Card className="my-3 p-3 rounded">
			<Link to={ `product/${ _id }` }>
				<Card.Img src={ image } variant="top" />
			</Link>
			<Card.Body>
				<Link to={ `product/${ _id }` }>
					<Card.Title as="div">{ name }</Card.Title>
				</Link>
				<Card.Text as="div">
					<RatingComponent
						value={ rating }
						text={ `${ numReviews } reviews` }
					/>
				</Card.Text>
				<Card.Text as="h3">${ price }</Card.Text>

			</Card.Body>
		</Card>
	)
}

export { ProductCard }