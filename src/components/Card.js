import React, { useCallback, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import {
	View,
	StyleSheet,
	ImageBackground,
	Text,
	TouchableOpacity,
	SafeAreaView,
} from 'react-native'

export const Card = ({
	title,
	imageSrc,
	onOpen,
	scores,
	access,
	time,
	kcal,
}) => {
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
							{title}
						</Text>
					</View>
					<View style={styles.container}>
						<View style={styles.iconWrapFirst}>
							<Ionicons name="time-outline" size={20} color="white" />
							<Text style={styles.textIcon}>{time} мин</Text>
						</View>

						<View style={styles.iconWrap}>
							<FontAwesome5 name="yin-yang" size={17} color="white" />
							<Text style={styles.textIcon}>{scores} баллов</Text>
						</View>

						<View style={styles.iconWrap}>
							<Ionicons name="pizza" size={19} color="white" />
							<Text style={styles.textIcon}>{kcal} ккал</Text>
						</View>

						<View style={styles.iconWrap}>
							<EvilIcons
								name={access ? 'unlock' : 'lock'}
								size={29}
								color="white"
							/>
							<Text style={styles.textIcon}>
								{access ? 'Доступен' : 'По подписке'}
							</Text>
						</View>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	post: {
		overflow: 'hidden',
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: 15,
		marginBottom: 10,
	},
	iconWrapFirst: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
	},
	iconWrap: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
	},
	textIcon: {
		fontSize: 12,
		marginTop: 5,
		marginLeft: 3,
		color: 'white',
	},
	image: {
		width: '100%',
		height: 200,
	},
	textWrap: {
		marginTop: 130,
		marginBottom: 10,
		paddingHorizontal: 15,
		alignItems: 'flex-start',
		width: '100%',
	},
	title: { color: '#fff', fontSize: 18 },
})
