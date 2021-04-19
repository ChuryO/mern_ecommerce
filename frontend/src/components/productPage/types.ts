import { IProductCardProps } from '~/components'

export interface IProductProps extends IProductCardProps {
	description: string
	brand: string
	category: string
	countInStock: number
}