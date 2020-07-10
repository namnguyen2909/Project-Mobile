
import React, { Component } from 'react';
import ListView from "deprecated-react-native-listview";
import {  StyleSheet, ActivityIndicator, Text, View, Alert, Platform, TouchableOpacity} from 'react-native';

export default class SupportScreen extends Component {

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

  return fetch('http://192.168.43.133:8235/api.dangkythi/api/tb_ltdk/read.php') //Đổi địa chỉ IP theo mạng
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

         <TouchableOpacity onPress={this.GetItem.bind(this, rowData.monhoc_ma)} >
       
         <Text style={styles.textViewContainer} >{'Mã môn: ' + rowData.monhoc_ma}</Text>

         <Text style={styles.textViewContainer} >{'Tên môn: ' + rowData.monhoc_ten}</Text>

         <Text style={styles.textViewContainer} >{'Ca thi: ' + rowData.cathi_ten}</Text>

         <Text style={styles.textViewContainer} >{'Ngày thi: ' + rowData.LTDK_ngaythi}</Text>

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