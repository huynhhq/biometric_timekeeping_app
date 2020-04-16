import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
    },
    spinnerContainer: {
        height: 75,
        width: 75,
        justifyContent: 'center',
        backgroundColor: 'gray',
        opacity: 0.8,
        alignItems: 'center',
        borderRadius: 10,
    }
});

export default styles;