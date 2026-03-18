import React from 'react';
import { View, Text, ScrollView, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { hochschulen, faecher, lerngruppen } from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import HochschuleCard from '../components/HochschuleCard';
import LerngruppeCard from '../components/LerngruppeCard';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export default function EntdeckenScreen() {
  const navigation = useNavigation<NavProp>();
  const trendingGruppen = lerngruppen.slice(0, 3);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FAFB' }} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24 }}>
        {/* Header */}
        <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: '800', color: '#111827' }}>Entdecken</Text>
          <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 2 }}>
            Unis, Fächer und Trends entdecken
          </Text>
        </View>

        {/* Hochschulen */}
        <View style={{ marginBottom: 28 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '700',
              color: '#111827',
              marginHorizontal: 16,
              marginBottom: 12,
            }}
          >
            Hochschulen in deiner Nähe
          </Text>
          <FlatList
            data={hochschulen}
            keyExtractor={(item) => item.hochschuleID}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={({ item }) => <HochschuleCard hochschule={item} />}
          />
        </View>

        {/* Beliebte Fächer */}
        <View style={{ marginBottom: 28, paddingHorizontal: 16 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '700',
              color: '#111827',
              marginBottom: 12,
            }}
          >
            Beliebte Fächer
          </Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {faecher.map((fach) => (
              <Pressable
                key={fach.fachID}
                style={({ pressed }) => ({
                  backgroundColor: fach.color + '15',
                  borderWidth: 1.5,
                  borderColor: fach.color + '40',
                  paddingHorizontal: 18,
                  paddingVertical: 10,
                  borderRadius: 12,
                  opacity: pressed ? 0.75 : 1,
                  minWidth: '45%',
                  alignItems: 'center',
                })}
              >
                <Text style={{ fontSize: 14, fontWeight: '700', color: fach.color }}>
                  {fach.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Trending Lerngruppen */}
        <View style={{ marginBottom: 8 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '700',
              color: '#111827',
              marginHorizontal: 16,
              marginBottom: 12,
            }}
          >
            Trending Lerngruppen
          </Text>
          {trendingGruppen.map((gruppe) => (
            <LerngruppeCard
              key={gruppe.gruppenID}
              gruppe={gruppe}
              onPress={() =>
                navigation.navigate('LerngruppenDetail', { gruppenID: gruppe.gruppenID })
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
