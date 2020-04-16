import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Table, Row, TableWrapper } from 'react-native-table-component';
import styles from './styles';
import BackBtn from '../BackButton';
import Header from '../Navigator/Header';
import mainConstants from "../MainConstants";
import { getAttendanceList } from '../../api/AttendanceServices';
 
export default class AttendanceList extends Component {
    
    tableData = [];

    constructor(props) {
    super(props);
    this.state = {
      tableHead: [ 'User ID', 'User Name', 'Employer ID', 'In Time', 'Out Time' ],
      widthArr: [90, 90, 90, 100, 100],
      tableData: null,
    }

    this.initializeData();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Header title="Attendance List" />,
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
    getAttendanceList( ( status, response ) => {
        if( status )
        {            
            let attendances = response;
            console.log( 'ATTENDANCE: ', attendances );
            const tableData = [];
            for (let index = 0; index < attendances.length; index++) {
                const element = attendances[index];        
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
    } );
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