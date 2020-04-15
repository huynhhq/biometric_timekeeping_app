import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BackBtn from '../BackButton';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <Header title="Add User" marginLeft={-60} />,
            headerStyle: {
                display: 'flex'
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

export default AddUser;
