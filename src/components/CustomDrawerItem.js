import React, { useState } from 'react'
import {
	SafeAreaView,
	View,
	StyleSheet,
	Image,
	Text,
	Button,
	Linking,
} from 'react-native'

import {
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from '@react-navigation/drawer'
import { CameraRoll } from '@react-native-community/cameraroll'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera'
export const PhotoPicker = () => {
	const [image, setImage] = useState(null)

	async function askForPermissions() {
		const { status } = await Camera.requestPermissionsAsync()
		console.log(status)
		// const { status } = await Permissions.askAsync(
		// 	Permissions.CAMERA,
		// 	Permissions.CAMERA_ROLL
		// )
		if (status !== 'granted') {
			Alert.alert('Ошибка', 'Вы не дали прав на создание фото')
			return false
		}
		return true
	}

	const takePhoto = async () => {
		const hasPermissions = await askForPermissions()

		if (!hasPermissions) {
			return
		}

		const img = await ImagePicker.launchCameraAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			quality: 0.7,
			allowsEditing: true,
			aspect: [16, 9],
		})
		const img2 = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			quality: 0.7,
			allowsEditing: true,
			aspect: [16, 9],
		})
		launchImageLibraryAsync
		setImage(img.uri)
		// onPick(img.uri)
	}
	return (
		<View style={styles.wrapper}>
			<Button title="Сделать фото" onPress={takePhoto} />
			{image && <Image source={{ uri: image }} style={styles.image} />}
		</View>
	)
}

const CustomDrawerItem = (props) => {
	const BASE_PATH =
		'https://raw.githubusercontent.com/AboutReact/sampleresource/master/'
	const proileImage = 'react_logo.png'

	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<Image
				source={{ uri: BASE_PATH + proileImage }}
				style={styles.sideMenuProfileIcon}
			/>
			<DrawerContentScrollView {...props}>
				<DrawerItemList {...props} />
			</DrawerContentScrollView>
			<Text
				style={{
					marginBottom: 20,
					fontSize: 16,
					textAlign: 'center',
					color: 'green',
				}}
				onPress={() => {
					Linking.openURL('http://www.homefit.club')
				}}
			>
				www.homefit.club
			</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	sideMenuProfileIcon: {
		resizeMode: 'center',
		width: 100,
		height: 100,
		borderRadius: 100 / 2,
		alignSelf: 'center',
		marginBottom: -30,
	},
	iconStyle: {
		width: 15,
		height: 15,
		marginHorizontal: 5,
	},
	customItem: {
		padding: 16,
		flexDirection: 'row',
		alignItems: 'center',
	},
	wrapper: { marginBottom: 10 },
	image: {
		marginTop: 10,
		width: '100%',
		height: 200,
	},
})

export default CustomDrawerItem
