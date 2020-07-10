import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
//import { useTheme } from '@react-navigation/native';
import DSKTScreen from '../screens/DSKTScreen';
export default class Home extends React.Component {
  constructor(props) {
      super(props);
      this.inputRefs = {};

      this.state = {
            
        KyHoc: undefined,
          
          data: [
              {
                  label: 'Học kỳ I Nhóm 1 Năm học 2019-2020',
                  value: 'hk1n1',
              },
              {
                  label: 'Học kỳ I Nhóm 2 Năm học 2019-2020',
                  value: 'hk1n2',
              },
              {
                  label: 'Học kỳ I Nhóm 3 Năm học 2019-2020',
                  value: 'hk1n3',
              },
          ],
      };
  }

  Kyhoc = () =>{
    fetch('http://192.168.43.133:8235/api.dangkythi/api/tb_kyhoc/read.php',{
      method:'GET',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          kyhoc_id:this.state.kyhoc_id,
          kyhoc_ten:this.state.kyhoc_ten
        })
    })
    .then((response)=>response.json())
    .then((res)=>{
      if(res.success===true){
        var kyhoc_id=res.message;
        AsyncStorage.setItem(kyhoc_id);
        this.props.navigation.navigate('Home');
        alert(" success");
      } else{
        alert("Invalid Credentials");
      }
    })
    .done();
  }

  render() {
      return (
          <View style={styles.container}>
              <View style={{ paddingVertical: 5 }} />

              <Text style={{paddingLeft: 130, fontSize:20}}>Chọn năm học:</Text>
              <RNPickerSelect
                  placeholder={{
                      label: 'Chọn kỳ học...',
                      value: null,
                  }}
                  items={this.state.data}
                  onValueChange={(value) => {
                      this.setState({
                          KyHoc: value,
                      });
                  }}
                  onUpArrow={() => {
                      this.inputRefs.picker.togglePicker();
                  }}
                  onDownArrow={() => {
                      this.inputRefs.company.focus();
                  }}
                  value={this.state.KyHoc}
                  ref={(el) => {
                      this.inputRefs.picker2 = el;
                  }}
                  useNativeAndroidPickerStyle={true}
              />
              <Button
                  title="Submit"
                  onPress={()=>{this.Kyhoc.bind(this)}}
              />
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      paddingTop: 30,
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingHorizontal: 10,
  },
});