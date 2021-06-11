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

export const FilterTime = ({ hei }) => {
	return (
		<View style={{ ...styles.container, height: hei }}>
			<ScrollView horizontal={true}>
				<View style={styles.filter}>
					<View>
						<Entypo name="500px" size={24} color="green" />
					</View>

					{arr.map((it, i) => (
						<PointWithTime key={i.toString()} min={it} />
					))}
				</View>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
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
