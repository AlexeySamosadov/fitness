import React, { useEffect } from 'react'

import { StyleSheet, View, Text } from 'react-native'
import { CardList } from '../components/CardList'

export const CardsScreen = ({ navigation }) => {
	const handleClickCard = () => {
		navigation.navigate('Video')
	}
	return (
		<View style={styles.container}>
			<CardList onOpen={handleClickCard} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		// marginTop: 20,
	},
})
