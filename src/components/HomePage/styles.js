import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
    },
    groupTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
    },
    categoryRowContainer: {
        backgroundColor: 'white',
        paddingBottom: 20,
    },
    categoryRow: {
        flexDirection: 'row',
        marginTop: 15,
    },
    categoryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryButton: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryIcon: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
    },
    categoryName: {
        marginTop: 5,
    },
    advertiseContainer: {
        paddingBottom: 10,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#ccc',
        resizeMode: 'cover'
    }
});

export default styles;
