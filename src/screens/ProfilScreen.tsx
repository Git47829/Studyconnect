import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import {
  currentStudent,
  premiumAbo,
  kurse,
  buchungen,
  lerngruppen,
  tutoren,
  hochschulen,
} from '../data/mockData';
import Avatar from '../components/Avatar';

type SettingsItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  iconColor?: string;
  danger?: boolean;
};

function SettingsItem({ icon, label, iconColor = '#6B7280', danger = false }: SettingsItemProps) {
  return (
    <Pressable
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          backgroundColor: danger ? '#FEE2E2' : '#F3F4F6',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 14,
        }}
      >
        <Ionicons name={icon} size={18} color={danger ? '#EF4444' : iconColor} />
      </View>
      <Text
        style={{
          flex: 1,
          fontSize: 15,
          fontWeight: '500',
          color: danger ? '#EF4444' : '#111827',
        }}
      >
        {label}
      </Text>
      <Ionicons name="chevron-forward" size={16} color="#D1D5DB" />
    </Pressable>
  );
}

export default function ProfilScreen() {
  const fullName = `${currentStudent.vorname} ${currentStudent.nachname}`;
  const hochschule = hochschulen.find((h) => h.hochschuleID === currentStudent.hochschuleID);
  const myKurse = kurse.filter((k) => currentStudent.kursIDs.includes(k.kursID));
  const myBuchungen = buchungen.map((b) => {
    const tutor = tutoren.find((t) => t.tutorenID === b.tutorenID);
    const gruppe = lerngruppen.find((g) => g.gruppenID === b.lerngruppenID);
    return { ...b, tutor, gruppe };
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FAFB' }} edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
        {/* Profile Header */}
        <View
          style={{
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            paddingVertical: 28,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#F3F4F6',
            marginBottom: 16,
          }}
        >
          <Avatar name={fullName} size="xl" />
          <Text style={{ fontSize: 22, fontWeight: '800', color: '#111827', marginTop: 14, marginBottom: 4 }}>
            {fullName}
          </Text>
          <Text style={{ fontSize: 14, color: '#6B7280', marginBottom: 4 }}>
            {currentStudent.email}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 }}>
            <View
              style={{
                backgroundColor: '#EEF2FF',
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: '#6C63FF', fontSize: 12, fontWeight: '600' }}>
                {currentStudent.studiengang}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#F0FDF4',
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: '#10B981', fontSize: 12, fontWeight: '600' }}>
                {currentStudent.semester}. Semester
              </Text>
            </View>
          </View>
          {hochschule && (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
              <Ionicons name="school-outline" size={13} color="#9CA3AF" />
              <Text style={{ color: '#9CA3AF', fontSize: 13, marginLeft: 4 }}>
                {hochschule.name}
              </Text>
            </View>
          )}
        </View>

        <View style={{ paddingHorizontal: 16 }}>
          {/* Premium Abo */}
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <Text style={{ fontSize: 15, fontWeight: '700', color: '#111827' }}>
                Premium Abo
              </Text>
              <View
                style={{
                  backgroundColor:
                    premiumAbo.status === 'aktiv' ? '#D1FAE5' : '#F3F4F6',
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '700',
                    color: premiumAbo.status === 'aktiv' ? '#10B981' : '#6B7280',
                    textTransform: 'capitalize',
                  }}
                >
                  {premiumAbo.status === 'aktiv' ? 'Aktiv' : 'Inaktiv'}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text style={{ fontSize: 12, color: '#9CA3AF' }}>Preis</Text>
                <Text style={{ fontSize: 15, fontWeight: '700', color: '#111827', marginTop: 2 }}>
                  €{premiumAbo.preis.toFixed(2)}/Monat
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 12, color: '#9CA3AF' }}>Laufzeit</Text>
                <Text style={{ fontSize: 15, fontWeight: '700', color: '#111827', marginTop: 2 }}>
                  {premiumAbo.laengeInTagen} Tage
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 12, color: '#9CA3AF' }}>Läuft ab</Text>
                <Text style={{ fontSize: 15, fontWeight: '700', color: '#111827', marginTop: 2 }}>
                  {new Date(premiumAbo.abschlussDatum).toLocaleDateString('de-DE', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                  })}
                </Text>
              </View>
            </View>
          </View>

          {/* Meine Kurse */}
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
              Meine Kurse
            </Text>
            {myKurse.map((kurs, idx) => (
              <View
                key={kurs.kursID}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  borderBottomWidth: idx < myKurse.length - 1 ? 1 : 0,
                  borderBottomColor: '#F3F4F6',
                }}
              >
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    backgroundColor: '#EEF2FF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 12,
                  }}
                >
                  <Ionicons name="book-outline" size={16} color="#6C63FF" />
                </View>
                <View>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: '#111827' }}>
                    {kurs.kursname}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 1 }}>
                    {kurs.dozent}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Meine Buchungen */}
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
              Meine Buchungen
            </Text>
            {myBuchungen.map((buchung, idx) => (
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
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    backgroundColor: '#FEF3C7',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 12,
                  }}
                >
                  <Ionicons name="calendar-outline" size={16} color="#F59E0B" />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 14, fontWeight: '600', color: '#111827' }}>
                    {buchung.tutor
                      ? `${buchung.tutor.vorname} ${buchung.tutor.nachname}`
                      : 'Unbekannt'}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#6B7280', marginTop: 1 }}>
                    {new Date(buchung.datum).toLocaleDateString('de-DE', {
                      weekday: 'short',
                      day: '2-digit',
                      month: 'long',
                    })}
                    {buchung.gruppe ? ` · ${buchung.gruppe.gruppenName}` : ''}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* Einstellungen */}
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 16,
              marginBottom: 12,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.06,
              shadowRadius: 3,
              elevation: 1,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: '700', color: '#111827', padding: 16, paddingBottom: 4 }}>
              Einstellungen
            </Text>
            <SettingsItem icon="notifications-outline" label="Benachrichtigungen" iconColor="#6C63FF" />
            <View style={{ height: 1, backgroundColor: '#F3F4F6', marginHorizontal: 16 }} />
            <SettingsItem icon="shield-checkmark-outline" label="Datenschutz" iconColor="#10B981" />
            <View style={{ height: 1, backgroundColor: '#F3F4F6', marginHorizontal: 16 }} />
            <SettingsItem icon="log-out-outline" label="Abmelden" danger />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
