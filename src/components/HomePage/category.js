import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const Category = ({ category, navigation }) => {
    let imgSrc = category.icon;
    return (
        <View style={ styles.categoryContainer  }>
            <TouchableOpacity style={ styles.categoryButton } onPress={() => { navigation.navigate( category.route ) }}>
                <FastImage source={ imgSrc } style={ styles.categoryIcon } />
                <Text style={ styles.categoryName }>{ category.name }</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category;
