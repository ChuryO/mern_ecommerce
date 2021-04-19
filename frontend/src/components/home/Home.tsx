import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { map, isEmpty } from 'lodash'
import { Col, Row } from 'react-bootstrap'

import { ProductCard } from '~/components/core'
import { IProductProps } from '~/components'


const Home = (): React.ReactElement | null => {
	const [ products, setProducts ] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const { data }: AxiosResponse = await axios.get('/api/products')
			setProducts(data)
		}

		fetchProducts()
	}, [])

	if (isEmpty(products)) {
		return null
	}

	return (
		<>
			<h1>Latest Product</h1>
			<Row>
				{ map(products, (product: IProductProps) => (
					<Col
						sm={ 12 }
						md={ 6 }
						lg={ 4 }
						key={ product._id }
					>
						<ProductCard { ...product } />
					</Col>
				)) }
			</Row>
		</>
	)
}

export { Home }