import React from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  currentStudent,
  lerngruppen,
  kurse,
} from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import Avatar from '../components/Avatar';
import StatsRow from '../components/StatsRow';
import LerngruppeCard from '../components/LerngruppeCard';
import PremiumBanner from '../components/PremiumBanner';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavProp>();

  const myLerngruppen = lerngruppen.filter((g) =>
    currentStudent.lerngruppenIDs.includes(g.gruppenID)
  );
  const myKurse = kurse.filter((k) => currentStudent.kursIDs.includes(k.kursID));
  const fullName = `${currentStudent.vorname} ${currentStudent.nachname}`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FAFB' }} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 20,
          }}
        >
          <View>
            <Text style={{ fontSize: 22, fontWeight: '800', color: '#111827' }}>
              Guten Morgen, {currentStudent.vorname} 👋
            </Text>
            <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 2 }}>
              Was lernst du heute?
            </Text>
          </View>
          <Pressable
            onPress={() => navigation.navigate('Profil')}
            style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
          >
            <Avatar name={fullName} size="md" />
          </Pressable>
        </View>

        {/* Stats */}
        <StatsRow
          stats={[
            {
              label: 'Lerngruppen',
              value: myLerngruppen.length,
              icon: 'people',
              color: '#6C63FF',
            },
            {
              label: 'Kurse',
              value: myKurse.length,
              icon: 'book',
              color: '#10B981',
            },
            {
              label: 'Tutor',
              value: 1,
              icon: 'school',
              color: '#F59E0B',
            },
          ]}
        />

        {/* Meine Lerngruppen */}
        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '700',
              color: '#111827',
              marginHorizontal: 16,
              marginBottom: 12,
            }}
          >
            Meine Lerngruppen
          </Text>
          <FlatList
            data={myLerngruppen}
            keyExtractor={(item) => item.gruppenID}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => (
              <LerngruppeCard
                gruppe={item}
                compact
                onPress={() =>
                  navigation.navigate('LerngruppenDetail', {
                    gruppenID: item.gruppenID,
                  })
                }
              />
            )}
          />
        </View>

        {/* Empfohlene Kurse */}
        <View style={{ marginBottom: 24 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '700',
              color: '#111827',
              marginHorizontal: 16,
              marginBottom: 12,
            }}
          >
            Empfohlene Kurse
          </Text>
          {kurse.map((kurs) => (
            <Pressable
              key={kurs.kursID}
              style={({ pressed }) => ({
                backgroundColor: '#FFFFFF',
                marginHorizontal: 16,
                marginBottom: 8,
                borderRadius: 14,
                padding: 14,
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.06,
                shadowRadius: 3,
                elevation: 1,
                opacity: pressed ? 0.85 : 1,
              })}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  backgroundColor: '#EEF2FF',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 12,
                }}
              >
                <Text style={{ fontSize: 18 }}>📚</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 14, fontWeight: '700', color: '#111827' }}>
                  {kurs.kursname}
                </Text>
                <Text style={{ fontSize: 13, color: '#6B7280', marginTop: 2 }}>
                  {kurs.dozent}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>

        {/* Premium Banner */}
        <PremiumBanner />
      </ScrollView>
    </SafeAreaView>
  );
}
