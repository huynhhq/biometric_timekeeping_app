import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Category from './category';
import styles from './styles';

const CATEGORIES = [
  { id: 1, name: 'Add User', icon: require( '../../assets/add-user.png' ), route: 'AddUser' },
  { id: 2, name: 'User List', icon: require( '../../assets/user-list.png' ), route: 'UserList'},
  { id: 3, name: 'Finger List', icon: require( '../../assets/fingerprint.jpeg' ), route: 'FingerList' },
  { id: 4, name: 'Attendance List', icon: require( '../../assets/attendance.png' ), route: 'AttendanceList' },  
];

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let { navigation } = this.props;    
    return (
      <ScrollView style={ styles.container }>
          <View style={ styles.categoryRowContainer }>
              <Text style={ styles.groupTitle }>USER MANAGEMENT</Text>
              <View style={ styles.categoryRow }>
                <Category category={ CATEGORIES[0] } navigation={navigation} />
                <Category category={ CATEGORIES[1] } navigation={ navigation } />
              </View>
              <View style={ styles.categoryRow }>
                <Category category={ CATEGORIES[2] } navigation={ navigation } /> 
                <Category category={ CATEGORIES[3] } navigation={ navigation } />
              </View>
          </View>
      </ScrollView>      
    );
  }
}

export default HomePage;
