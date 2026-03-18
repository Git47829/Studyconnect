import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Tutor, getFach } from '../data/mockData';
import Avatar from './Avatar';

type TutorCardProps = {
  tutor: Tutor;
  onPress?: () => void;
};

export default function TutorCard({ tutor, onPress }: TutorCardProps) {
  const fullName = `${tutor.vorname} ${tutor.nachname}`;

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
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
        <Avatar name={fullName} size="md" />
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 2 }}>
            {fullName}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="star" size={13} color="#F59E0B" />
            <Text style={{ fontSize: 13, color: '#6B7280', marginLeft: 4 }}>
              {tutor.rating.toFixed(1)} ({tutor.bewertungen} Bewertungen)
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
        {tutor.fachIDs.map((fachID) => {
          const fach = getFach(fachID);
          if (!fach) return null;
          return (
            <View
              key={fachID}
              style={{
                backgroundColor: fach.color + '20',
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 12, color: fach.color, fontWeight: '600' }}>
                {fach.name}
              </Text>
            </View>
          );
        })}
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
        <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14 }}>Buchen</Text>
      </Pressable>
    </Pressable>
  );
}
