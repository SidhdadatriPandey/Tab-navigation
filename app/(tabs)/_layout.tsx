import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const _layout = () => {
  return (
    <Tabs initialRouteName='index' screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tabs.Screen name='index' options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
      }} />
      <Tabs.Screen name='explore' options={{
        tabBarLabel: 'Explore',
        tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color={color} />
      }} />
      <Tabs.Screen name='profile' options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => <Ionicons name="people-circle" size={24} color={color} />
      }} />
    </Tabs>)
}


export default _layout;
