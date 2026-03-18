import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Stat = {
  label: string;
  value: string | number;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
};

type StatsRowProps = {
  stats: Stat[];
};

export default function StatsRow({ stats }: StatsRowProps) {
  return (
    <View style={{ flexDirection: 'row', gap: 10, marginHorizontal: 16, marginBottom: 24 }}>
      {stats.map((stat) => (
        <View
          key={stat.label}
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            borderRadius: 14,
            padding: 14,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.06,
            shadowRadius: 3,
            elevation: 1,
          }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              backgroundColor: stat.color + '20',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 6,
            }}
          >
            <Ionicons name={stat.icon} size={18} color={stat.color} />
          </View>
          <Text style={{ fontSize: 18, fontWeight: '800', color: '#111827' }}>{stat.value}</Text>
          <Text style={{ fontSize: 11, color: '#9CA3AF', marginTop: 2, textAlign: 'center' }}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}
