import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CampusCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardTopRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.cardEmoji}>🎮</Text>
          <Text style={styles.cardTitle}>Game Lounge</Text>
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>OPEN TODAY</Text>
        </View>
      </View>

      <Text style={styles.cardDescription}>
        Drop in, play games, and meet other students.
      </Text>
    </View>
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
    backgroundColor: '#FF2A8520',
    borderColor: '#FF2A85',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#FF70B4',
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