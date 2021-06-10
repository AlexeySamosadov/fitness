import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Button, Platform } from 'react-native'
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { ReadyLessons } from './src/Screens/ReadyLessons'
import { VideoComponent } from './src/Screens/Video'
import { Ionicons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { CardList } from './src/components/CardList'
import { CardsScreen } from './src/Screens/CardsScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { VideoScreen } from './src/Screens/VideoScreen'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from './src/components/AppHeaderIcon'
import CustomDrawerItem from './src/components/CustomDrawerItem'
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

export default function App() {
	const MainStackNavigator = () => {
		return (
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						height: 110,
						backgroundColor: '#121212',
					},
					headerBackTitleVisible: false,
					headerTitleStyle: {
						textAlign: 'center',
						marginRight: Platform.OS === 'android' ? 50 : 0,
					},
					headerTintColor: 'green',
				}}
			>
				<Stack.Screen
					name="homeFit"
					options={({ navigation }) => ({
						title: 'Фитнес дома',
						headerTintColor: 'green',
						headerLeft: () => (
							<HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
								<Item
									title="Toggle Drawer"
									iconName={'ios-menu'}
									onPress={() => navigation.toggleDrawer()}
								/>
							</HeaderButtons>
						),
					})}
				>
					{(props) => <CardsScreen {...props} />}
				</Stack.Screen>
				<Stack.Screen
					name="Video"
					component={VideoScreen}
					options={({ navigation }) => ({
						title: 'Видео',
					})}
				/>
			</Stack.Navigator>
		)
	}

	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="homeFit"
				overlayColor="transparent"
				drawerPosition="left"
				drawerType="back"
				drawerStyle={{
					backgroundColor: '#121212',
				}}
				drawerContentOptions={{
					activeTintColor: 'white',
					activeBackgroundColor: 'transparent',
					inactiveTintColor: 'gray',
					itemStyle: {
						width: '100%',
						paddingHorizontal: 5,
						marginHorizontal: 0,
						borderBottomWidth: 0.5,
						paddingBottom: 5,
						borderBottomColor: 'rgba(255,255,255,0.1)',
					},
				}}
				screenOptions={{
					headerShown: false,
					headerTitleAlign: 'center',
					headerStyle: {
						minHeight: 140,
						paddingTop: 10,
						borderWidth: 1,
						borderBottomColor: '#121212',
						backgroundColor: '#121212',
						borderBottomStyle: 'solid',
					},
					headerTitleStyle: {
						color: 'green',
						marginBottom: 0,
					},
					headerTintColor: 'green',
				}}
				drawerContent={(props) => <CustomDrawerItem {...props} />}
			>
				<Drawer.Screen
					name="main_A"
					component={ReadyLessons}
					options={{
						title: 'ВСТУПИТЬ В КЛУБ',
						drawerIcon: ({ focused }) => (
							<SimpleLineIcons
								name="present"
								size={27}
								color={focused ? 'red' : 'green'}
							/>
						),
					}}
				/>

				<Drawer.Screen
					name="homeFit"
					component={MainStackNavigator}
					options={{
						style: {
							borderWidth: 2,
							borderColor: 'red',
						},
						title: 'ФИТНЕС ДОМА',
						drawerIcon: ({ focused }) => (
							<AntDesign
								name="home"
								size={27}
								color={focused ? 'red' : 'green'}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="gym"
					component={VideoScreen}
					options={{
						headerShown: false,
						title: 'ТРЕНИРОВКА В ЗАЛЕ',
						drawerIcon: ({ focused }) => (
							<MaterialIcons
								name="fitness-center"
								size={27}
								color={focused ? 'red' : 'green'}
							/>
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	)
}
