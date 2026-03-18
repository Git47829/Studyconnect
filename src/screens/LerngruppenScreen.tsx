import React, { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { lerngruppen, faecher, getFach } from '../data/mockData';
import { RootStackParamList } from '../navigation/types';
import SearchBar from '../components/SearchBar';
import FilterChips from '../components/FilterChips';
import LerngruppeCard from '../components/LerngruppeCard';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

const FILTER_OPTIONS = ['Alle', ...faecher.map((f) => f.name)];

export default function LerngruppenScreen() {
  const navigation = useNavigation<NavProp>();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Alle');

  const filtered = lerngruppen.filter((g) => {
    const fach = getFach(g.fachID);
    const matchSearch =
      g.gruppenName.toLowerCase().includes(search.toLowerCase()) ||
      (fach?.name.toLowerCase().includes(search.toLowerCase()) ?? false);
    const matchFilter =
      activeFilter === 'Alle' || fach?.name === activeFilter;
    return matchSearch && matchFilter;
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9FAFB' }} edges={['top']}>
      {/* Title */}
      <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12 }}>
        <Text style={{ fontSize: 24, fontWeight: '800', color: '#111827' }}>Lerngruppen</Text>
        <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 2 }}>
          Finde deine perfekte Studiengruppe
        </Text>
      </View>

      <SearchBar value={search} onChangeText={setSearch} placeholder="Lerngruppe suchen..." />
      <FilterChips
        options={FILTER_OPTIONS}
        selected={activeFilter}
        onSelect={setActiveFilter}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.gruppenID}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 4, paddingBottom: 80 }}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', paddingTop: 60 }}>
            <Ionicons name="search" size={40} color="#D1D5DB" />
            <Text style={{ color: '#9CA3AF', marginTop: 12, fontSize: 15 }}>
              Keine Lerngruppen gefunden
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <LerngruppeCard
            gruppe={item}
            onPress={() =>
              navigation.navigate('LerngruppenDetail', { gruppenID: item.gruppenID })
            }
          />
        )}
      />

      {/* FAB */}
      <Pressable
        style={({ pressed }) => ({
          position: 'absolute',
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: 28,
          backgroundColor: '#6C63FF',
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#6C63FF',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.4,
          shadowRadius: 8,
          elevation: 6,
          opacity: pressed ? 0.85 : 1,
        })}
      >
        <Ionicons name="add" size={28} color="#FFFFFF" />
      </Pressable>
    </SafeAreaView>
  );
}
