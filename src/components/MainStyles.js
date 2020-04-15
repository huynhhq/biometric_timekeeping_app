import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({ 
    button: {
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        height: 40,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    defaultButton: {
        backgroundColor: '#f8f9fa',
        borderColor: '#f8f9fa',
    },
    successButton: {
        backgroundColor: '#28a745',
        borderColor: '#28a745',
    },
    successButtonText: {
        color: 'white',
        fontSize: 16,
    },
    dangerButton: {
        backgroundColor: '#dc3545',
        borderColor: '#dc3545',
    },
    roundButton: {
        borderRadius: 20,
    },
    dangerButtonText: {
        color: 'white',
        fontSize: 16,
    },
    warningButton: {
        backgroundColor: '#ffc107',
        borderColor: '#ffc107',
    },
    warningButtonText: {
        color: '#212529',
        fontSize: 16,
    },
    secondaryButton: {
        backgroundColor: '#6c757d',
        borderColor: '#6c757d',
    },
    secondaryButtonText: {
        color: 'white',
        fontSize: 16,
    },
    primaryButton: {
        backgroundColor: '#007bff',
        borderColor: '#007bff',
    },
    primaryButtonText: {
        color: 'white',
        fontSize: 16,
    },
    grayButton: {
        backgroundColor: '#ddd',
        borderColor: '#ddd',
    },
    successText: {
        color: '#28a745',
        fontSize: 16,
    },
    warningText: {
        color: '#ffc107',
        fontSize: 16,
    },
    dangerText: {
        color: '#dc3545',
        fontSize: 16,
    },
    boldText: {
        fontWeight: 'bold',
    },
    textCenter: {
        textAlign: 'center',
    },
    textItalic: {
        fontStyle: 'italic',
    },
    textBold: {
        fontWeight: 'bold',
    },
    textUnderline: {
        textDecorationLine: 'underline',
    },
    card: {
        shadowOffset: {width: 0, height: 2},
        shadowColor: '#ddd',
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 2,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallButton: {
        height: 24,
    },
    smallButtonText: {
        fontSize: 12,
    },
    flex1: {
        flex: 1,
    },
    flex1Start: {
        flex: 1,
        alignItems: 'flex-start',
    },
    flex1End: {
        flex: 1,
        alignItems: 'flex-end',
    },
    flex1Column: {
        flex: 1,
        flexDirection: 'column',
    },
    flex1Row: {
        flex: 1,
        flexDirection: 'row',
    },
    flex1Center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flex1RowCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    grayBackground: {
        backgroundColor: '#F8F8F8',
    },
});

export default mainStyles;
