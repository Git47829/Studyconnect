import React from 'react';
import { View, Text } from 'react-native';

type AvatarProps = {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const COLORS = [
  '#6C63FF', '#10B981', '#F59E0B', '#EF4444', '#EC4899',
  '#3B82F6', '#8B5CF6', '#14B8A6', '#F97316', '#06B6D4',
];

function getColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return COLORS[Math.abs(hash) % COLORS.length];
}

function getInitials(name: string): string {
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const sizeMap = {
  sm: { container: 32, text: 12 },
  md: { container: 44, text: 16 },
  lg: { container: 60, text: 22 },
  xl: { container: 84, text: 32 },
};

export default function Avatar({ name, size = 'md' }: AvatarProps) {
  const { container, text } = sizeMap[size];
  const bg = getColor(name);
  const initials = getInitials(name);

  return (
    <View
      style={{
        width: container,
        height: container,
        borderRadius: container / 2,
        backgroundColor: bg,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: '#FFFFFF', fontSize: text, fontWeight: '700' }}>
        {initials}
      </Text>
    </View>
  );
}
