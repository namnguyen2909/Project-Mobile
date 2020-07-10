import React, {Component} from 'react';
import {StyleSheet, AsyncStorage } from 'react-native';
//import {  StyleSheet } from 'react-native';
//import { Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
export class DSMT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monthi_id, monhoc_ma, monhoc_ten, monthi_mota,
      kyhoc_id, ktmh_id, kieuthi_ten,
      kieuthi_mota
    }
  }
  DSMT = () => {
    fetch('http://localhost:8235/api.dangkythi/pages/danhsachmonthi.php', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        monhoc_ma: this.state.monhoc_ma,
        monhoc_ten: this.state.monhoc_ten,
        kieuthi_ten: this.state.kieuthi_mota
      })
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          var monhoc_ma = res.message;
          AsyncStorage.setItem(monhoc_ma);
          this.props.navigation.navigate('DSMT');

        } else {
          alert("Invalid Credentials");
        }
      })
      .done();
  }
  render() {
    return (
      /*<View style={styles.content}>
        <Text style={styles.logo}>- WELCOME -</Text>
        <View>
          <TextInput underlineColorAndroid='transparent' style={styles.input} placeholder="Username"
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}>
          </TextInput>
          <TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input} placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}>
          </TextInput>
        </View>
        <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>*/
      <FlatList
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    opacity: 0.9,
    backgroundColor: 'white',
    borderWidth: 2,
    margin: 10,
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 45,
    color: 'black',
    textShadowColor: 'gray',
    textShadowRadius: 10
  },
  input: {
    borderRadius: 10,
    padding: 10,
    color: 'black',
    borderWidth: 2,
    borderColor: 'lightgray',
    width: 200,
    margin: 5
  },
  buttonContainer: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    borderRadius: 100,
    padding: 10,
    backgroundColor: 'magenta',
    color: 'white',
    textAlign: 'center',
    width: 100
  }
});



//------------------------------------
/*import React, {Component} from 'react';

export default class AppCC extends Component {
  constructor(){
    super() 
      this.state = {
        data: []
      }
    
  }
  componentDidMount() {
    $.ajax({
       url: "http://jsonplaceholder.typicode.com/posts",
       type: "GET",
       dataType: 'json',
       ContentType: 'application/json',
       success: function(data) {
         
         this.setState({data: data});
       }.bind(this),
       error: function(jqXHR) {
         console.log(jqXHR);
       }.bind(this)
    })
  }
  render() {
    
        
    return (
      <table>
      <tbody>{this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.userId}</td>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                  </tr>
                )
             
             })}</tbody>
       </table>
    )
  }
}*/

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
 
export default class DSMT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Mã môn','Tên môn','Kiểu thi'],
      widthArr: [100, 180, 150]
    }
  }
  componentDidMount = () => {
    fetch('http://192.168.1.8:8235/api.dangkythi/api/tb_monthi/read.php', {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                data: responseJson
            })
        })
        .catch((error) => {
            console.error(error);
        });
}
 
  render() {
    const state = this.state;
    const tableData = [];
    /*for (let i = 0; i < 3; i += 1) {
      const rowData = [];
      for (let j = 0; j < 3; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }*/
 
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
});

