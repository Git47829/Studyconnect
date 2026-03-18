import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { lerngruppen, getFach, getTutor, getKurs } from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import Avatar from '../components/Avatar';

type Props = NativeStackScreenProps<RootStackParamList, 'LerngruppenDetail'>;

export default function LerngruppenDetailScreen({ route }: Props) {
  const { gruppenID } = route.params;
  const gruppe = lerngruppen.find((g) => g.gruppenID === gruppenID);

  if (!gruppe) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Lerngruppe nicht gefunden.</Text>
      </View>
    );
  }

  const fach = getFach(gruppe.fachID);
  const tutor = gruppe.tutorenID ? getTutor(gruppe.tutorenID) : undefined;
  const kurs = gruppe.kursID ? getKurs(gruppe.kursID) : undefined;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FAFB' }} edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Hero Card */}
        <View
          style={{
            backgroundColor: '#6C63FF',
            paddingHorizontal: 20,
            paddingTop: 24,
            paddingBottom: 32,
          }}
        >
          <View
            style={{
              backgroundColor: (fach?.color ?? '#6C63FF') + '30',
              paddingHorizontal: 12,
              paddingVertical: 5,
              borderRadius: 10,
              alignSelf: 'flex-start',
              marginBottom: 10,
            }}
          >
            <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: '700' }}>
              {fach?.name ?? 'Unbekannt'}
            </Text>
          </View>
          <Text style={{ fontSize: 24, fontWeight: '800', color: '#FFFFFF', marginBottom: 8 }}>
            {gruppe.gruppenName}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="people-outline" size={15} color="rgba(255,255,255,0.8)" />
            <Text style={{ color: 'rgba(255,255,255,0.8)', marginLeft: 6, fontSize: 14 }}>
              {gruppe.mitgliederanzahl} Mitglieder
            </Text>
            <View
              style={{
                width: 4,
                height: 4,
                borderRadius: 2,
                backgroundColor: 'rgba(255,255,255,0.5)',
                marginHorizontal: 10,
              }}
            />
            <Ionicons name="calendar-outline" size={15} color="rgba(255,255,255,0.8)" />
            <Text style={{ color: 'rgba(255,255,255,0.8)', marginLeft: 6, fontSize: 14 }}>
              {new Date(gruppe.erstelldatum).toLocaleDateString('de-DE')}
            </Text>
          </View>
        </View>

        <View style={{ padding: 16 }}>
          {/* Mitglieder */}
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
            <Text style={{ fontSize: 15, fontWeight: '700', color: '#111827', marginBottom: 14 }}>
              Mitglieder
            </Text>
            {gruppe.mitglieder.map((name, idx) => (
              <View
                key={idx}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 8,
                  borderBottomWidth: idx < gruppe.mitglieder.length - 1 ? 1 : 0,
                  borderBottomColor: '#F3F4F6',
                }}
              >
                <Avatar name={name} size="sm" />
                <Text style={{ marginLeft: 12, fontSize: 14, color: '#374151', fontWeight: '500' }}>
                  {name}
                </Text>
              </View>
            ))}
          </View>

          {/* Tutor */}
          {tutor && (
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
                Zugewiesener Tutor
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar name={`${tutor.vorname} ${tutor.nachname}`} size="md" />
                <View style={{ marginLeft: 12 }}>
                  <Text style={{ fontSize: 15, fontWeight: '700', color: '#111827' }}>
                    {tutor.vorname} {tutor.nachname}
                  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                    <Ionicons name="star" size={13} color="#F59E0B" />
                    <Text style={{ fontSize: 13, color: '#6B7280', marginLeft: 4 }}>
                      {tutor.rating.toFixed(1)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}

          {/* Kurs */}
          {kurs && (
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
                Verknüpfter Kurs
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    backgroundColor: '#EEF2FF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 12,
                  }}
                >
                  <Ionicons name="book-outline" size={22} color="#6C63FF" />
                </View>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: '700', color: '#111827' }}>
                    {kurs.kursname}
                  </Text>
                  <Text style={{ fontSize: 13, color: '#6B7280', marginTop: 2 }}>
                    {kurs.dozent}
                  </Text>
                </View>
              </View>
            </View>
          )}
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
            Beitreten
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
