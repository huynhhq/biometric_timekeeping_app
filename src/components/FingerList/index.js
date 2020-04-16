import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, Row, TableWrapper, Cell } from 'react-native-table-component';
import styles from './styles';
import BackBtn from '../BackButton';
import Header from '../Navigator/Header';
import mainConstants from "../MainConstants";
import { getFingerList, deleteFingerbyId } from '../../api/FingerServices';
import NotificationHandler from '../SharePage/NotificationHandler';

export default class FingerList extends Component {

  loading = null;

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Finger ID',	'Finger Code', 'User ID', 'User Name', 'Employer ID', 'Created Date', 'Status',	'Action'],
      widthArr: [90, 90, 80, 100, 120, 120, 90, 90],
      tableData: null
    }
    this.loading = React.createRef();
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
              element.btnid = element.id;
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
 
  deleteFinger(data) {
    deleteFingerbyId(data, (status, response)=>{
      
      if( status )
      {
        this.initializeData();
        this.loading.current._showSuccessNotification( response );
      }
      else
      {
        this.loading.current._showErrorNotificationmysq( response );
      }
    });
  }
 
  render() {
    const state = this.state;     

    const element = (data, index) => (
      <TouchableOpacity onPress={() => this.deleteFinger(data)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <NotificationHandler ref={this.loading} />  
        <ScrollView horizontal={true}>
          <View>
            
            <ScrollView style={styles.dataWrapper}>
              {
                state.tableData != null ?
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                    {
                        state.tableData.map((rowData, index) => (
                          <TableWrapper key={index} style={styles.row}>
                            {
                              rowData.map((cellData, cellIndex) => (
                                <Cell key={cellIndex} data={cellIndex === 7 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                              ))
                            }
                          </TableWrapper>
                           
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