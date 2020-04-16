import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    image_background: {
        flex: 1, 
        width: null,
        height: '100%', 
        resizeMode: 'cover', 
        opacity: 0.9,
        justifyContent: 'center',        
        flexDirection:'row',
        alignItems:'center',        
    },
    image_logo: {
        width: '90%', 
        resizeMode: 'contain',        
    },
    field_container: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingLeft: 20,
        paddingRight: 20,        
        marginLeft: 0,
        marginRight: 0,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    image_logo_container_lv2: {        
        justifyContent: 'center', 
        alignItems: 'center',        
    },
    confirm_btn: {
        marginTop: 20, 
        alignSelf: 'center',         
        width: '45%',
        flex: 0.45,
        paddingLeft: 5,
        paddingRight: 5,
    },
    confirm_btn__text: {
        fontSize: 18, 
        color: 'white', 
        width: '100%', 
        textAlign: 'center'
    },
    back_btn: {
        marginTop: 20, 
        alignSelf: 'center',         
        width: '45%',
        flex: 0.45,
        paddingLeft: 5,
        paddingRight: 5,
    },
    main_container: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

});

export default styles;