import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { tutoren, buchungen, lerngruppen, getFach } from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import Avatar from '../components/Avatar';

type Props = NativeStackScreenProps<RootStackParamList, 'TutorDetail'>;

export default function TutorDetailScreen({ route }: Props) {
  const { tutorenID } = route.params;
  const tutor = tutoren.find((t) => t.tutorenID === tutorenID);

  if (!tutor) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tutor nicht gefunden.</Text>
      </View>
    );
  }

  const fullName = `${tutor.vorname} ${tutor.nachname}`;
  const myBuchungen = buchungen.filter((b) => b.tutorenID === tutorenID);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FAFB' }} edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Profile Header */}
        <View
          style={{
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            paddingVertical: 32,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#F3F4F6',
          }}
        >
          <Avatar name={fullName} size="xl" />
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#111827', marginTop: 16, marginBottom: 4 }}>
            {fullName}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons
                key={star}
                name={star <= Math.round(tutor.rating) ? 'star' : 'star-outline'}
                size={16}
                color="#F59E0B"
              />
            ))}
            <Text style={{ fontSize: 14, color: '#6B7280', marginLeft: 8 }}>
              {tutor.rating.toFixed(1)} · {tutor.bewertungen} Bewertungen
            </Text>
          </View>
        </View>

        <View style={{ padding: 16 }}>
          {/* Fächer */}
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.06,
              shadowRadius: 3,
              elevation: 1,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '700', color: '#111827', marginBottom: 12 }}>
              Lehrfächer
            </Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
              {tutor.fachIDs.map((fachID) => {
                const fach = getFach(fachID);
                if (!fach) return null;
                return (
                  <View
                    key={fachID}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: fach.color + '20',
                      paddingHorizontal: 14,
                      paddingVertical: 8,
                      borderRadius: 10,
                    }}
                  >
                    <View
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: fach.color,
                        marginRight: 8,
                      }}
                    />
                    <Text style={{ fontSize: 14, color: fach.color, fontWeight: '600' }}>
                      {fach.name}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          {/* Buchungen */}
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.06,
              shadowRadius: 3,
              elevation: 1,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '700', color: '#111827', marginBottom: 12 }}>
              Bevorstehende Buchungen
            </Text>
            {myBuchungen.length === 0 ? (
              <Text style={{ color: '#9CA3AF', fontSize: 14 }}>Keine Buchungen vorhanden</Text>
            ) : (
              myBuchungen.map((buchung, idx) => {
                const gruppe = lerngruppen.find((g) => g.gruppenID === buchung.lerngruppenID);
                return (
                  <View
                    key={buchung.buchungsID}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 10,
                      borderBottomWidth: idx < myBuchungen.length - 1 ? 1 : 0,
                      borderBottomColor: '#F3F4F6',
                    }}
                  >
                    <View
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        backgroundColor: '#EEF2FF',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 12,
                      }}
                    >
                      <Ionicons name="calendar" size={18} color="#6C63FF" />
                    </View>
                    <View>
                      <Text style={{ fontSize: 14, fontWeight: '600', color: '#111827' }}>
                        {new Date(buchung.datum).toLocaleDateString('de-DE', {
                          weekday: 'long',
                          day: '2-digit',
                          month: 'long',
                        })}
                      </Text>
                      {gruppe && (
                        <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 2 }}>
                          {gruppe.gruppenName}
                        </Text>
                      )}
                    </View>
                  </View>
                );
              })
            )}
          </View>
        </View>
      </ScrollView>

      {/* CTA */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#F3F4F6',
          padding: 16,
          paddingBottom: 28,
        }}
      >
        <Pressable
          style={({ pressed }) => ({
            backgroundColor: '#6C63FF',
            borderRadius: 14,
            paddingVertical: 15,
            alignItems: 'center',
            opacity: pressed ? 0.85 : 1,
          })}
        >
          <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 16 }}>
            Jetzt buchen
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
