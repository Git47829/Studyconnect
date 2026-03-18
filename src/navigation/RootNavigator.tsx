import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './TabNavigator';
import SplashScreen from '../screens/SplashScreen';
import LerngruppenDetailScreen from '../screens/LerngruppenDetailScreen';
import TutorDetailScreen from '../screens/TutorDetailScreen';
import ProfilScreen from '../screens/ProfilScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen
          name="LerngruppenDetail"
          component={LerngruppenDetailScreen}
          options={{
            headerShown: true,
            headerTitle: 'Lerngruppe',
            headerBackTitle: 'Zurück',
            headerTintColor: '#6C63FF',
            headerStyle: { backgroundColor: '#FFFFFF' },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="TutorDetail"
          component={TutorDetailScreen}
          options={{
            headerShown: true,
            headerTitle: 'Tutor',
            headerBackTitle: 'Zurück',
            headerTintColor: '#6C63FF',
            headerStyle: { backgroundColor: '#FFFFFF' },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Profil"
          component={ProfilScreen}
          options={{
            headerShown: true,
            headerTitle: 'Mein Profil',
            headerBackTitle: 'Zurück',
            headerTintColor: '#6C63FF',
            headerStyle: { backgroundColor: '#FFFFFF' },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
