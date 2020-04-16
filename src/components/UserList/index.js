import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BackBtn from '../BackButton';
import Header from '../Navigator/Header';
import mainConstants from "../MainConstants";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
        headerTitle: <Header title="User List" />,
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

  

  render() {
    return (
      <View>
        <Text> index </Text>
      </View>
    );
  }
}

export default UserList;
