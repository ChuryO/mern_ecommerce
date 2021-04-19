import React from 'react'

import { StarComponent, IRatingComponentProps } from '~/components/core'

const RatingComponent = (props: IRatingComponentProps): React.ReactElement | null => {
	const {
		value,
		text = ''
	} = props

	const renderStars = (): React.ReactElement[] => {
		const stars: React.ReactElement[] = []

		for (let i = 0, unit = 1, halfOfUnit = 0.5; i < 5; i++, unit++, halfOfUnit++) {
			stars.push(
				<StarComponent
					key={ unit }
					value={ value }
					unit={ unit }
					halfOfUnit={ halfOfUnit }
				/>
			)
		}
		return stars
	}


	return (
		<div>
			{ renderStars() } { text && text }
		</div>
	)
}

export { RatingComponent }
