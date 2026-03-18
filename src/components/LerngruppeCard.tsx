import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Lerngruppe, getFach } from '../data/mockData';

type LerngruppeCardProps = {
  gruppe: Lerngruppe;
  onPress?: () => void;
  compact?: boolean;
};

export default function LerngruppeCard({ gruppe, onPress, compact = false }: LerngruppeCardProps) {
  const fach = getFach(gruppe.fachID);

  if (compact) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => ({
          backgroundColor: '#FFFFFF',
          borderRadius: 16,
          padding: 16,
          width: 160,
          marginRight: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
          elevation: 2,
          opacity: pressed ? 0.85 : 1,
        })}
      >
        <View
          style={{
            backgroundColor: fach?.color ?? '#6C63FF',
            paddingHorizontal: 8,
            paddingVertical: 3,
            borderRadius: 8,
            alignSelf: 'flex-start',
            marginBottom: 8,
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: '600' }}>
            {fach?.name ?? 'Unbekannt'}
          </Text>
        </View>
        <Text style={{ fontSize: 14, fontWeight: '700', color: '#111827', marginBottom: 6 }} numberOfLines={2}>
          {gruppe.gruppenName}
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="people" size={13} color="#9CA3AF" />
          <Text style={{ fontSize: 12, color: '#6B7280', marginLeft: 4 }}>
            {gruppe.mitgliederanzahl} Mitglieder
          </Text>
        </View>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
        opacity: pressed ? 0.85 : 1,
      })}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: '700', color: '#111827', flex: 1, marginRight: 8 }}>
          {gruppe.gruppenName}
        </Text>
        <View
          style={{
            backgroundColor: fach?.color ?? '#6C63FF',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '600' }}>
            {fach?.name ?? 'Unbekannt'}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
          <Ionicons name="people-outline" size={14} color="#9CA3AF" />
          <Text style={{ fontSize: 13, color: '#6B7280', marginLeft: 4 }}>
            {gruppe.mitgliederanzahl} Mitglieder
          </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="calendar-outline" size={14} color="#9CA3AF" />
          <Text style={{ fontSize: 13, color: '#6B7280', marginLeft: 4 }}>
            {new Date(gruppe.erstelldatum).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}
          </Text>
        </View>
      </View>

      <Pressable
        style={({ pressed }) => ({
          backgroundColor: '#6C63FF',
          borderRadius: 10,
          paddingVertical: 10,
          alignItems: 'center',
          opacity: pressed ? 0.8 : 1,
        })}
      >
        <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14 }}>Beitreten</Text>
      </Pressable>
    </Pressable>
  );
}
