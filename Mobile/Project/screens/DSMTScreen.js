import React, { Component } from 'react';
import ListView from "deprecated-react-native-listview";
import {  StyleSheet, ActivityIndicator, Text, View, Alert, Platform, TouchableOpacity} from 'react-native';

export default class Project extends Component {

constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}

GetItem (data) {
 
Alert.alert(data);

}


componentDidMount() {

  return fetch('http://192.168.43.133:8235/api.dangkythi/api/tb_monthi/read.php') //Đổi địa chỉ IP theo mạng
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.data);
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson.data),
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

ListViewItemSeparator = () => {
  return (
    <View
      style={{

        height: .5,
        width: "100%",
        backgroundColor: "#000",

      }}
    />
  );
}


render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (

    <View style={styles.MainContainer}>

      <ListView

        dataSource={this.state.dataSource}

        renderSeparator= {this.ListViewItemSeparator}

        renderRow={(rowData) =>

       <View style={{flex:1, flexDirection: 'column'}} >

         <TouchableOpacity onPress={this.GetItem.bind(this, rowData.monhoc_ten)} >
       
         <Text style={styles.textViewContainer} >{'Mã môn: ' + rowData.monhoc_ma}</Text>

         <Text style={styles.textViewContainer} >{'Tên môn: ' + rowData.monhoc_ten}</Text>

         <Text style={styles.textViewContainer} >{'Tên kiểu thi: ' + rowData.kieuthi_ten}</Text>

         <Text style={styles.textViewContainer} >{'Mô tả: ' + rowData.kieuthi_mota}</Text>

         </TouchableOpacity>

       </View>

        }
      />

    </View>
  );
}
}

const styles = StyleSheet.create({

MainContainer :{

// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,
backgroundColor: '#00BCD4',
padding: 5,

},

textViewContainer: {

 textAlignVertical:'center', 
 padding:10,
 fontSize: 20,
 color: '#fff',

}

});

//-------------------------------------------------------------------------------------------------------

/*import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
 
export default class DSMT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID','Mã bộ môn','Tên bộ môn'],
      widthArr: [100, 180, 150]
    }
  }
  componentDidMount = () => {
    fetch('http://192.168.1.8:8235/api.dangkythi/api/tb_bomon/read.php', {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson.data);
            this.setState({
                data: responseJson.data
            })
            
        })
        .catch((error) => {
            console.error(error);
        });
}
 
  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 3; i += 1) {
      const rowData = [];
      for (let j = 0; j < 3; j += 1) {
        rowData.push(`${data}`);
      }
      tableData.push(rowData);
    }
 
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
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
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});*/

