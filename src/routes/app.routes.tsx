
   
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import SinglePost from '../screens/SinglePost'


const AppStack = createNativeStackNavigator()

export default function AppRoutes() {
	return (
		<AppStack.Navigator screenOptions={{ headerShown: false }}>
			<AppStack.Screen name="Home" component={Home} />
			<AppStack.Screen name="SinglePost" component={SinglePost} />
		</AppStack.Navigator>
	)
}