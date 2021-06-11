import React, { useEffect, useState, useRef } from 'react'

import { StyleSheet, View, Text } from 'react-native'
import { CardList } from '../components/CardList'
import { FilterTime } from '../components/FilterTime'
import Animated from 'react-native-reanimated'
import { ScrollView } from 'react-native'

const HEIGHT_FILTER_TIME = 50

export const CardsScreen = ({ navigation }) => {
	// const fadeAnim = useRef(new Animated.Value(0)).current
	const scrollY = new Animated.Value(0)
	const filterTimeY = new Animated.interpolateNode(scrollY, {
		inputRange: [0, HEIGHT_FILTER_TIME],
		outputRange: [0, -HEIGHT_FILTER_TIME],
	})

	// const fadeIn = () => {
	// 	Animated.timing(fadeAnim, {
	// 		toValue: 0,
	// 		duration: 1000,
	// 		useNativeDriver: true,
	// 	}).start()
	// }
	// const fadeOut = () => {
	// 	Animated.timing(fadeAnim, {
	// 		toValue: 1,
	// 		duration: 1000,
	// 		useNativeDriver: true,
	// 	}).start()
	// }

	const handleClickCard = () => {
		navigation.navigate('Video')
	}
	const scroll = () => {
		return Animated.event([
			{
				nativeEvent: { contentOffSet: { y: scrollY } },
			},
		])
	}
	return (
		<View style={styles.container}>
			<FilterTime />

			<CardList onOpen={handleClickCard} scroll={scroll} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#121212',
		// marginTop: 20,
	},
})
