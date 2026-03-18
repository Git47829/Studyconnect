import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

export default function SplashScreen({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#6C63FF',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: 88,
          height: 88,
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: 24,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 24,
        }}
      >
        <Ionicons name="book" size={44} color="#FFFFFF" />
      </View>
      <Text
        style={{
          fontSize: 36,
          fontWeight: '800',
          color: '#FFFFFF',
          letterSpacing: -0.5,
          marginBottom: 8,
        }}
      >
        StudyConnect
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: 'rgba(255,255,255,0.75)',
          fontWeight: '500',
        }}
      >
        Dein Studienbegleiter
      </Text>
    </View>
  );
}
