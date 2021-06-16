import React from 'react'

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
		backgroundColor: '#121212',
		zIndex: 50,
		elevation: 4,
		// marginTop: 20,
	},
})
