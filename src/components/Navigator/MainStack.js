import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator, createAppContainer} from "react-navigation";
import DefaultHeader from './DefaultHeader';
import mainConstants from "../MainConstants";

import HomePage from "../HomePage";
import AddUser from "../AddUser";

let MainNavigation = {
    HomePage: {
		screen: HomePage,
	},
	AddUser: {
		screen: AddUser
	}
};

const MainNav = createStackNavigator({...MainNavigation},
	{
		initialRouteName: 'HomePage',
		defaultNavigationOptions: ({ navigation }) => ({			
			headerTitle: <DefaultHeader title="Timekeeping Management" navigation={ navigation } />,
			
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