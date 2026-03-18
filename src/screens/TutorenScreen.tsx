import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { tutoren, faecher, getFach } from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import SearchBar from '../components/SearchBar';
import FilterChips from '../components/FilterChips';
import TutorCard from '../components/TutorCard';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

const FILTER_OPTIONS = ['Alle', ...faecher.map((f) => f.name)];

export default function TutorenScreen() {
  const navigation = useNavigation<NavProp>();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Alle');

  const filtered = tutoren.filter((t) => {
    const fullName = `${t.vorname} ${t.nachname}`.toLowerCase();
    const matchSearch = fullName.includes(search.toLowerCase());
    const matchFilter =
      activeFilter === 'Alle' ||
      t.fachIDs.some((id) => getFach(id)?.name === activeFilter);
    return matchSearch && matchFilter;
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FAFB' }} edges={['top']}>
      <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12 }}>
        <Text style={{ fontSize: 24, fontWeight: '800', color: '#111827' }}>Tutoren</Text>
        <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 2 }}>
          Finde deinen persönlichen Nachhilfelehrer
        </Text>
      </View>

      <SearchBar value={search} onChangeText={setSearch} placeholder="Tutor suchen..." />
      <FilterChips
        options={FILTER_OPTIONS}
        selected={activeFilter}
        onSelect={setActiveFilter}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.tutorenID}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 4, paddingBottom: 24 }}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', paddingTop: 60 }}>
            <Ionicons name="person-outline" size={40} color="#D1D5DB" />
            <Text style={{ color: '#9CA3AF', marginTop: 12, fontSize: 15 }}>
              Keine Tutoren gefunden
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TutorCard
            tutor={item}
            onPress={() =>
              navigation.navigate('TutorDetail', { tutorenID: item.tutorenID })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}
