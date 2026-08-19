import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function CampusCard({ emoji, title, description, status, accent = '#FF2A85', onPress }) {
  return (
    <Pressable 
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed
      ]}
    >
      <View style={styles.cardTopRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.cardEmoji}>{emoji}</Text>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>

        {/* Dynamic Status Badge */}
        <View style={[styles.badge, { borderColor: accent, backgroundColor: `${accent}20` }]}>
          <Text style={[styles.badgeText, { color: accent }]}>{status}</Text>
        </View>
      </View>

      <Text style={styles.cardDescription}>{description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#151B31',
    borderColor: '#2A3357',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },
  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardEmoji: {
    fontSize: 24,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  badge: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  cardDescription: {
    color: '#AEB8D4',
    fontSize: 15,
    lineHeight: 22,
  },
});