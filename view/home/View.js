import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { MaterialIcons } from '@expo/vector-icons'
import { Minifigs } from '../minigifs'
import { ListScreen } from '../list'
import { Favorites } from '../favorite'

export const Tab = createBottomTabNavigator()

export const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Minifigs"
      screenOptions={{
        headerShown: false, // hindden componetnaam (Label header)
        tabBarActiveTintColor: '#e91e63', // kleur van actieve 'Tab'
        tabBarInactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen
        name="Minifigs"
        component={Minifigs}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'My Favorites',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}