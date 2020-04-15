
import React from 'react';
import { View, StatusBar, Text, BackHandler, Platform } from 'react-native';
import Styles from './styles';

const DefaultHeader = ({ title, navigation }) => {
    if (Platform.OS == 'android') {
        BackHandler.addEventListener('hardwareBackPress', () => {
            navigation.goBack();
            return true;
        });
    }
    return (
        <View style={ Styles.mainContainer }>
            <StatusBar backgroundColor="#0084b4" barStyle="light-content" />
            <Text style={ Styles.title }>
                {title}
            </Text>         
        </View>
    );
}

export default DefaultHeader;