import React, { Component } from 'react';
import ListView from "deprecated-react-native-listview";
import {  StyleSheet, ActivityIndicator, Text, View, Alert, Platform, TouchableOpacity} from 'react-native';

export default class DSKT extends Component {

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

  return fetch('http://192.168.1.8:8235/api.dangkythi/api/tb_kieuthi/read.php')
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

         <TouchableOpacity onPress={this.GetItem.bind(this, rowData.kieuthi_ten)} >
       
         <Text style={styles.textViewContainer} >{'ID: ' + rowData.kieuthi_id}</Text>

         <Text style={styles.textViewContainer} >{'Tên kiểu thi: ' + rowData.kieuthi_ten}</Text>

         <Text style={styles.textViewContainer} >{'Hình thức thi: ' + rowData.kieuthi_hinhthuc}</Text>

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
