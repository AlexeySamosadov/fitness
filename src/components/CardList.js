import React from 'react'
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { Card } from './Card'

const data = [
	{
		id: `1`,
		title: 'Тренировка с Алисой',
		videoID: '',
		imageSrc:
			'https://img3.goodfon.ru/wallpaper/nbig/3/2b/valentina-fitnes-volosy-litso-figura-sportzal-shtanga-sporti.jpg',
		time: 10,
		scores: 100,
		access: true,
		kcal: 128,
	},
	{
		id: `2`,
		title: 'Семейная',
		videoID: '',
		imageSrc:
			'https://st3.depositphotos.com/11433364/14668/i/600/depositphotos_146685581-stock-photo-man-and-woman-doing-plank.jpg',
		time: 20,
		scores: 100,
		access: true,
		kcal: 522,
	},
	{
		id: `3`,
		title: 'Для профессионалов',
		videoID: '',
		imageSrc:
			'https://st2.depositphotos.com/3927429/8215/i/600/depositphotos_82158134-stock-photo-athletic-man-and-woman-with.jpg',
		time: 25,
		scores: 132,
		access: false,
		kcal: 387,
	},
	{
		id: `5`,
		title: 'Яги',
		videoID: '',
		imageSrc:
			'https://espanarusa.com/files/autoupload/33/98/58/ol2ddcf5419571.jpg',
		time: 45,
		scores: 3450,
		access: true,
		kcal: 400,
	},
	{
		id: `4`,
		title: 'Strong Man',
		videoID: '',
		imageSrc:
			'https://img.gazeta.ru/files3/943/13134943/Depositphotos_71080145_l-2015-pic4_zoom-1500x1500-90328.jpg',
		time: 60,
		scores: 4800,
		access: true,
		kcal: 732,
	},
]

export const CardList = ({ onOpen, scroll }) => {
	return (
		<View style={styles.wrapper}>
			<FlatList
				onScroll={scroll}
				style={styles.flat}
				data={data}
				keyExtractor={(post) => post.id.toString()}
				renderItem={({ item }) => (
					<SafeAreaView style={{ flex: 1 }}>
						<Card
							imageSrc={item.imageSrc}
							title={item.title}
							scores={item.scores}
							access={item.access}
							time={item.time}
							kcal={item.kcal}
							onOpen={onOpen}
						/>
					</SafeAreaView>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 0,
		padding: 0,
		marginBottom: 80,
		// backgroundColor: '#121212',
	},
	flat: {
		margin: 0,
		padding: 0,
	},
})
