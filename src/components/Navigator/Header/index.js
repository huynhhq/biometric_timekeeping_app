import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = ({ title }) => {
    return (
        <View>
            <Text style={ styles.title }>
                { title }
            </Text>
        </View>
    )
}

export default Header;