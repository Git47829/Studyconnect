import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Hochschule } from '../data/mockData';

type HochschuleCardProps = {
  hochschule: Hochschule;
};

export default function HochschuleCard({ hochschule }: HochschuleCardProps) {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        width: 180,
        marginRight: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          backgroundColor: '#EEF2FF',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}
      >
        <Ionicons name="school" size={22} color="#6C63FF" />
      </View>
      <Text style={{ fontSize: 14, fontWeight: '700', color: '#111827', marginBottom: 4 }} numberOfLines={2}>
        {hochschule.name}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
        <Ionicons name="location-outline" size={12} color="#9CA3AF" />
        <Text style={{ fontSize: 12, color: '#6B7280', marginLeft: 3 }}>{hochschule.stadt}</Text>
      </View>
      <Text style={{ fontSize: 11, color: '#9CA3AF' }}>Gegr. {hochschule.gruendungsdatum}</Text>
    </View>
  );
}
