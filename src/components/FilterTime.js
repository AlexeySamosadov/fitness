import React, { useCallback, useEffect } from 'react'
import { Entypo } from '@expo/vector-icons'
import {
	View,
	StyleSheet,
	ImageBackground,
	Text,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
	Animated,
} from 'react-native'
const arr = [10, 15, 25, 35, 45, 55, 65, 75, 85, 95]

const PointWithTime = ({ min }) => (
	<>
		<View style={styles.point} />
		<View>
			<Text style={styles.text}>{min} мин</Text>
		</View>
	</>
)

export const FilterTime = () => {
	return (
		<View style={styles.container}>
			<View style={styles.filter}>
				<View>
					<Entypo name="500px" size={24} color="green" />
				</View>

				{arr.map((it, i) => (
					<PointWithTime key={i.toString()} min={it} />
				))}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		backgroundColor: '#121212',
		position: 'relative',
		top: 0,
		left: 0,
		right: 0,
		elevation: 4,
		height: 44,
		// height: 49,
		// maxHeight: 50,
	},
	filter: {
		paddingVertical: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
		color: 'white',
		marginLeft: 7,
	},
	point: {
		marginLeft: 7,
		width: 5,
		height: 5,
		borderRadius: 100 / 2,
		backgroundColor: 'gray',
		color: 'gray',
	},
})
