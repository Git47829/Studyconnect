import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import LerngruppenScreen from '../screens/LerngruppenScreen';
import TutorenScreen from '../screens/TutorenScreen';
import EntdeckenScreen from '../screens/EntdeckenScreen';
import { TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

const PRIMARY = '#6C63FF';
const GRAY = '#9CA3AF';

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PRIMARY,
        tabBarInactiveTintColor: GRAY,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#F3F4F6',
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lerngruppen"
        component={LerngruppenScreen}
        options={{
          tabBarLabel: 'Lerngruppen',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tutoren"
        component={TutorenScreen}
        options={{
          tabBarLabel: 'Tutoren',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Entdecken"
        component={EntdeckenScreen}
        options={{
          tabBarLabel: 'Entdecken',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
