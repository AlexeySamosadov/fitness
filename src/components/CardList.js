import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Card } from './Card'

const data = [
	{
		id: `1`,
		name: 'foto',
		videoID: '',
		imageSrc:
			'https://img3.goodfon.ru/wallpaper/nbig/3/2b/valentina-fitnes-volosy-litso-figura-sportzal-shtanga-sporti.jpg',
	},
	{
		id: `2`,
		name: 'foto2',
		videoID: '',
		imageSrc:
			'https://img3.goodfon.ru/wallpaper/nbig/3/2b/valentina-fitnes-volosy-litso-figura-sportzal-shtanga-sporti.jpg',
	},
	{
		id: `3`,
		name: 'foto3',
		videoID: '',
		imageSrc:
			'https://img3.goodfon.ru/wallpaper/nbig/3/2b/valentina-fitnes-volosy-litso-figura-sportzal-shtanga-sporti.jpg',
	},
	{
		id: `5`,
		name: 'foto2',
		videoID: '',
		imageSrc:
			'https://img3.goodfon.ru/wallpaper/nbig/3/2b/valentina-fitnes-volosy-litso-figura-sportzal-shtanga-sporti.jpg',
	},
	{
		id: `4`,
		name: 'foto3',
		videoID: '',
		imageSrc:
			'https://img3.goodfon.ru/wallpaper/nbig/3/2b/valentina-fitnes-volosy-litso-figura-sportzal-shtanga-sporti.jpg',
	},
]

export const CardList = ({ onOpen }) => {
	return (
		<View style={styles.wrapper}>
			<FlatList
				style={styles.flat}
				data={data}
				keyExtractor={(post) => post.id.toString()}
				renderItem={({ item }) => (
					<Card imageSrc={item.imageSrc} name={item.name} onOpen={onOpen} />
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 0,
		padding: 0,
		// backgroundColor: '#121212',
	},
	flat: {
		margin: 0,
		padding: 0,
	},
	// wrapper: { paddingBottom: 115 },
})
