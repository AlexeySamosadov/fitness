import React, { useCallback, useEffect } from 'react'
import {
	View,
	StyleSheet,
	ImageBackground,
	Text,
	TouchableOpacity,
} from 'react-native'

export const Card = ({ name, imageSrc, onOpen }) => {
	const handleClickText = () => {
		onOpen()
	}
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={handleClickText}>
			<View style={styles.post}>
				<ImageBackground
					source={{
						uri: imageSrc,
					}}
					style={styles.image}
				>
					<View style={styles.textWrap}>
						<Text onPress={handleClickText} style={styles.title}>
							Aктивное утро {name}
						</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	post: {
		overflow: 'hidden',
		borderRadius: 5,
	},
	image: {
		width: '100%',
		height: 200,
	},
	textWrap: {
		marginTop: 160,
		paddingHorizontal: 15,
		backgroundColor: 'rgba(0,0,0,0.5)',
		alignItems: 'flex-start',
		width: '100%',
	},
	title: { color: '#fff', fontSize: 18 },
})
