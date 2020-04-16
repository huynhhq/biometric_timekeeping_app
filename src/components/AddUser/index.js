import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, LayoutAnimation } from 'react-native';
import { Input, Icon } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';;
import BackBtn from '../BackButton';
import Header from '../Navigator/Header';
import mainConstants from "../MainConstants";
import mainStyles from '../MainStyles';
import NotificationHandler from '../SharePage/NotificationHandler';
import styles from './styles';
import { addUser } from '../../api/UserServices';

class AddUser extends Component {

  name = '';
  code= '';
  loading = null;

  constructor(props) {
    super(props);
    this.state = {
      confirm_btn_click: false,      
    };

    this.loading = React.createRef();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Header title="Add User" />,
      headerStyle: {
				backgroundColor: mainConstants.MAIN_COLOR,
				color: '#ffffff',
      },
      headerTintColor: '#ffffff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
      headerLeft: <BackBtn navigation={ navigation } />
    }
  }

  confirmAction = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (this.state.confirm_btn_click == false) {
          this.setState({
              confirm_btn_width: true,                    
          }, () => {
            if ( this.name == '' || this.code == '' ) {                                                    
              this.loading.current._showErrorNotification('Add User');
              this.setState({
                confirm_btn_click: false
              });                                                                                                              
            } else {
              addUser( this.name, this.code, ( status, response ) => {
                console.log( 'STATUS: ', status );
                console.log( 'RESPONSE: ', response );
                if( status ) {
                  this.loading.current._showSuccessNotification( response );
                  this.setState({
                    confirm_btn_click: false
                  });
                }               
                else {
                  this.loading.current._showErrorNotification( response );
                  this.setState({
                    confirm_btn_click: false
                  }); 
                }
              });
            }          
        });
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView>
        <NotificationHandler ref={this.loading} />                        
        <View style={ styles.image_logo_container_lv2 }>
            <Image
                source={require('../../assets/logo.png')}
                style={ styles.image_logo }
            />
        </View>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
            <View rounded style={styles.field_container}>
                <Icon type="FontAwesome5" name="user" />
                <Input
                    placeholder="Name"
                    onEndEditing={event => {
                        this.name = event.nativeEvent.text;
                    }}
                    autoCapitalize="none"
                /> 
            </View> 
            <View rounded style={styles.field_container}>
                <Icon type="FontAwesome5" name="user" />
                <Input
                    placeholder="Employer ID"
                    onEndEditing={event => {
                        this.code = event.nativeEvent.text;
                    }}
                    autoCapitalize="none"
                /> 
            </View>                            
            <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: 20 }}>                                                                                               
                <TouchableOpacity style={[ mainStyles.button, mainStyles.successButton, mainStyles.roundButton, { flex: 1,  } ]}
                    onPress={() => { this.confirmAction(); }}
                >
                    <Text style={ styles.confirm_btn__text }>Confirm</Text>
                </TouchableOpacity>                
            </View>                                                                                  
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default AddUser;
