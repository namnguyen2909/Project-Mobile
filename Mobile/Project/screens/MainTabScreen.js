import React from 'react';
import {View,Text} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

import DSMTScreen from './DSMTScreen';
import DSKTScreen from './DSKTScreen';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const DSMTStack = createStackNavigator();
const DSKTStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Trang chủ"
        component={HomeStackScreen}
        options={{
          //tabBarLabel: 'Trang chủ',
          tabBarLabel: <Text style={{ fontSize: 11 }}> Trang chủ </Text>,
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Quản Lý Lịch Thi"
        component={DetailsStackScreen}
        options={{
          //tabBarLabel: 'Quản Lý Lịch Thi',
          tabBarLabel: <Text style={{ fontSize: 11 }}> Quản lý lịch thi </Text>,
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-list-box" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Danh sách môn thi"
        component={DSMTStackScreen}
        options={{
          //tabBarLabel: 'Danh sách môn thi',
          tabBarLabel: <Text style={{ fontSize: 11 }}> Danh sách môn thi </Text>,
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={DSKTStackScreen}
        options={{
          //tabBarLabel: 'Danh sách kiểu thi',
          tabBarLabel: <Text style={{ fontSize: 11 }}> Danh sách kiểu thi </Text>,
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Lập lịch thi',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);
const DSMTStackScreen = ({navigation}) => (
  <DSMTStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#694fad',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DSMTStack.Screen name="DSMT" component={DSMTScreen} options={{
          title:'Danh sách môn thi',
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#694fad" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </DSMTStack.Navigator>
  );
  const DSKTStackScreen = ({navigation}) => (
    <DSKTStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#d02860',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <DSKTStack.Screen name="DSKT" component={DSKTScreen} options={{
            title:'Danh sách kiểu thi',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#d02860" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </DSKTStack.Navigator>
    );