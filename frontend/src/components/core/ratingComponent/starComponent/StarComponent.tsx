import React from 'react'

import { IStarComponentProps } from '~/components/core'

const StarComponent = (props: IStarComponentProps): React.ReactElement | null => {
	const {
		value, unit, halfOfUnit,
		color = '#f8e825'
	} = props

	return (
		<span>
			<i
				style={ { color } } className={ value >= unit ? 'fas fa-star' : value >= halfOfUnit ? 'fas fa-star-half-alt' : 'far fa-star' }></i>
		</span>
	)
}

export { StarComponent }
