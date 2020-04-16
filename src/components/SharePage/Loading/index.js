import React from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';
import styles from './styles';

export default class Loading extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.visible != prevState.visible) {
            return { visible: nextProps.visible }
        } else {
            return null;
        }
    }

    render = () => {
        console.log("VISIBLE: ", this.state.visible);
        return (
            <View style={[ styles.container, { top: this.state.visible ? 0 : -1000 } ]}>
                <View style={ styles.spinnerContainer }>
                    <Spinner color="white" />
                </View>
            </View>
        )
    }

}