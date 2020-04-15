import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, NavigationEvents } from "react-navigation";
import DefaultHeader from './DefaultHeader';
import mainConstants from "../MainConstants";

import HomePage from "../HomePage";

let MainNavigation = {
    HomePage: {
		screen: HomePage,
	},
};

const MainNav = createStackNavigator({...MainNavigation},
	{
		initialRouteName: 'HomePage',
		defaultNavigationOptions: ({ navigation }) => ({			
			headerTitle: <DefaultHeader title="Timekeeping Management" navigation={ navigation } />,
			headerRight: <View style={{ width: 50 }} />,
			headerStyle: {
				backgroundColor: mainConstants.MAIN_COLOR,
				color: '#ffffff',
			},
			headerTintColor: '#ffffff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
			headerBackTitle: null,
		}),
	}
);

const AppContainer = createAppContainer(MainNav);

export default AppContainer;