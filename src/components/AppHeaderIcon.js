import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

export const AppHeaderIcon = (props) => (
	<HeaderButton
		{...props}
		iconSize={34}
		IconComponent={Ionicons}
		color="green"
	/>
)
