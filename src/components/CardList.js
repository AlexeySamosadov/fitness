import React from 'react'
import {
	View,
	StyleSheet,
	FlatList,
	SafeAreaView,
	ScrollView,
	Animated,
	Platform,
} from 'react-native'
import { Card } from './Card'
import { FilterTime } from './FilterTime'

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
	{
		id: `6`,
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
		id: `7`,
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
		id: `8`,
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
		id: `9`,
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
		id: `10`,
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

const _renderItem = ({ item, onOpen }) => (
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
)

export const CardList = ({ onOpen }) => {
	const scrollY = new Animated.Value(0)

	const diffClamp = Animated.diffClamp(scrollY, 0, 40)

	const translateY = diffClamp.interpolate({
		inputRange: Platform.OS === 'android' ? [0, 40] : [0, 20, 40],
		outputRange: Platform.OS === 'android' ? [0, -40] : [0, 20, -40],
	})
	const animatedHeaderHeight = diffClamp.interpolate({
		inputRange: Platform.OS === 'android' ? [0, 40] : [0, 20, 40],
		outputRange: Platform.OS === 'android' ? [40, 0] : [40, 10, 0],
	})

	return (
		<View>
			<View>
				<Animated.View
					style={{
						height: animatedHeaderHeight,
						transform: [{ translateY: translateY }],
						elevation: 4,
					}}
				>
					<ScrollView horizontal={true}>
						<FilterTime />
					</ScrollView>
				</Animated.View>
			</View>
			<Animated.FlatList
				bounces={false}
				onScroll={(e) => {
					scrollY.setValue(e.nativeEvent.contentOffset.y)
				}}
				scrollEventThrottle={1}
				data={data}
				keyExtractor={(post) => post.id.toString()}
				renderItem={({ item }) => {
					return <_renderItem item={item} onOpen={onOpen} />
				}}
			/>
		</View>
	)
}
