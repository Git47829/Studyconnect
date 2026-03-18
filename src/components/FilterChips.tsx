import React from 'react';
import { ScrollView, Pressable, Text } from 'react-native';

type FilterChipsProps = {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
};

export default function FilterChips({ options, selected, onSelect }: FilterChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, gap: 8, paddingBottom: 12 }}
      style={{ flexGrow: 0 }}
    >
      {options.map((option) => {
        const isActive = selected === option;
        return (
          <Pressable
            key={option}
            onPress={() => onSelect(option)}
            style={({ pressed }) => ({
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: isActive ? '#6C63FF' : '#F3F4F6',
              opacity: pressed ? 0.75 : 1,
              borderWidth: isActive ? 0 : 1,
              borderColor: '#E5E7EB',
            })}
          >
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: isActive ? '#FFFFFF' : '#6B7280',
              }}
            >
              {option}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
