import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
//http://172.16.1.120:8235/api.dangkythi/api/tb_kyhoc/read.php
//http://172.16.1.120:8235/api.dangkythi/api/tb_ltdk/read.php
//http://172.16.1.120:8235/api.dangkythi/api/tb_monthi/read.php
//http://172.16.1.120:8235/api.dangkythi/api/tb_namhoc/read.php