import React, { useState, useRef } from 'react'
import { View, Alert, StyleSheet, Text } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'

export const VideoComponent = () => {
	const [playing, setPlaying] = useState(false)

	const controlRef = useRef()
	const onStateChange = (state) => {
		if (state === 'ended') {
			setPlaying(false)
			Alert.alert('video has finished playing!')
		}
		if (state !== 'playing') {
			setPlaying(false)
		}
	}

	return (
		<>
			<View style={styles.container}>
				<YoutubePlayer
					height={260}
					ref={controlRef}
					play={playing}
					videoId={'OdOMw6dvvbU'}
					onChangeState={onStateChange}
				/>
				<YoutubePlayer
					height={260}
					ref={controlRef}
					play={playing}
					videoId={'OdOMw6dvvbU'}
					onChangeState={onStateChange}
				/>
			</View>
		</>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
	},
	controlContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})
