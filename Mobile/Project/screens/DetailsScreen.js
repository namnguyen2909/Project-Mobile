import React from 'react';
import { View, Text, Button, StyleSheet ,TouchableOpacity,Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SupportScreen from './SupportScreen';


const DetailsScreen = ({navigation}) => {
    
    return (
      <View style={styles.button}>
        <Text>Quản lí lịch thi</Text>
                <TouchableOpacity
                    style={styles.DK}
                   // onPress={() => navigation.push("Home")}
                   onPress={() => {navigation.navigate(SupportScreen)}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.DK}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Lịch thi dự kiến</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.push("Details")}
                    style={[styles.DK, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Lịch thi chính thức</Text>
                </TouchableOpacity>
            </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
  },
  button: {
      alignItems: 'center',
      marginTop: 250
  },
  DK: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});