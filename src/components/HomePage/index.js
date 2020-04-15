import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Category from './category';
import styles from './styles';

const CATEGORIES = [
  { id: 1, name: 'Add User', icon: require( '../../assets/add-user.png' ) },
  { id: 2, name: 'User List', icon: require( '../../assets/user-list.png' ) },
  { id: 3, name: 'Delete User', icon: require( '../../assets/delete-user.png' ) },
  { id: 4, name: 'Export CSV', icon: require( '../../assets/export-csv.png' ) },  
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
