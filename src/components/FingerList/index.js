import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import styles from './styles';
import BackBtn from '../BackButton';
import Header from '../Navigator/Header';
import mainConstants from "../MainConstants";
import { getFingerList } from '../../api/FingerServices';

export default class FingerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Finger ID',	'Finger Code', 'User ID', 'User Name', 'Employer ID', 'Created Date', 'Status',	'Action'],
      widthArr: [90, 90, 80, 100, 120, 120, 90, 90],
      tableData: null
    }
    this.initializeData();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Header title="Finger List" />,
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

  initializeData() {
    getFingerList( ( status, response ) => {
      if( status )
      {            
          let fingers = response;
          console.log( 'FINGER: ', fingers );
          const tableData = [];
          for (let index = 0; index < fingers.length; index++) {
              const element = fingers[index];        
              tableData.push( Object.values( element ) );
          }

          this.setState({
              tableData: tableData
          }); 
      }
      else
      {
        this.loading.current._showErrorNotification( response );                
      }
    });  
  }
 
  render() {
    const state = this.state;     
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              {
                state.tableData != null ?
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                    {
                        state.tableData.map((rowData, index) => (
                            <Row
                            key={index}
                            data={rowData}
                            widthArr={state.widthArr}
                            style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                            textStyle={styles.text}
                            />
                        ))
                    }
                </Table>
                :
                <Text>Loading...</Text>
              }
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}