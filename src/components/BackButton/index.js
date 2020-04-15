import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const BackBtn = ({ pressEvent = null, navigation, color = "white" }) => {
    return (
        <TouchableOpacity style={{ width: 50 }} onPress={pressEvent ? pressEvent : () => {
            navigation.goBack()
        }}>
            <Icon type="FontAwesome5" name="arrow-left" style={{ marginLeft: 15, fontSize: 18, color: color }} />
        </TouchableOpacity>
    )
}

export default BackBtn;
