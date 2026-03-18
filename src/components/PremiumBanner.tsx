import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PremiumBanner() {
  return (
    <View
      style={{
        marginHorizontal: 16,
        marginBottom: 24,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#6C63FF',
        padding: 20,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Ionicons name="star" size={20} color="#FCD34D" style={{ marginRight: 8 }} />
        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800' }}>
          StudyConnect Premium
        </Text>
      </View>
      <Text style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, marginBottom: 16, lineHeight: 20 }}>
        Unbegrenzte Tutorenbuchungen, exklusive Lerngruppen und priorisierter Support.
      </Text>
      <Pressable
        style={({ pressed }) => ({
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          paddingVertical: 10,
          paddingHorizontal: 20,
          alignSelf: 'flex-start',
          opacity: pressed ? 0.85 : 1,
        })}
      >
        <Text style={{ color: '#6C63FF', fontWeight: '700', fontSize: 14 }}>Jetzt upgraden</Text>
      </Pressable>
    </View>
  );
}
