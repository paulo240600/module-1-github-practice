import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />

      {/* Campus Connect Header */}
      <View style={styles.hero}>
        <Text style={styles.kicker}>MODULE 1 BUILD</Text>
        <Text style={styles.title}>Campus Connect</Text>
        <Text style={styles.subtitle}>Your campus. Your day. Your way.</Text>
      </View>

      {/* Section Heading */}
      <Text style={styles.sectionHeading}>What's Happening?</Text>

      {/* Game Lounge Card */}
      <View style={styles.card}>
        <View style={styles.cardTopRow}>
          {/* Emoji + Title grouped together */}
          <View style={styles.titleContainer}>
            <Text style={styles.cardEmoji}>🎮</Text>
            <Text style={styles.cardTitle}>Game Lounge</Text>
          </View>

          {/* Status Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>OPEN TODAY</Text>
          </View>
        </View>

        <Text style={styles.cardDescription}>
          Drop in, play games, and meet other students.
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTopRow}>
          {/* Emoji + Title grouped together */}
          <View style={styles.titleContainer}>
            <Text style={styles.cardEmoji}>📚</Text>
            <Text style={styles.cardTitle}>Study Jam</Text>
          </View>

          {/* Status Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>STUDY NOW</Text>
          </View>
        </View>

        <Text style={styles.cardDescription}>
          Find a study space and get ready for your next exam.
        </Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardTopRow}>
          {/* Emoji + Title grouped together */}
          <View style={styles.titleContainer}>
            <Text style={styles.cardEmoji}>🍕</Text>
            <Text style={styles.cardTitle}>Campus Eats</Text>
          </View>

          {/* Status Badge */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>GET FOOD</Text>
          </View>
        </View>

        <Text style={styles.cardDescription}>
          Find food, snacks, and student dining options around campus.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0B1020',
    padding: 24,
  },
  hero: {
    backgroundColor: '#5B4BFF',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
  },
  kicker: {
    color: '#C9C4FF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.6,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '900',
    marginTop: 8,
  },
  subtitle: {
    color: '#F2F0FF',
    fontSize: 17,
    marginTop: 8,
  },
  sectionHeading: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 16,
  },

  /* Card Styling */
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
    gap: 8, // Space between emoji and title
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
    backgroundColor: '#FF2A8520', // Vibrant pink accent glow
    borderColor: '#2ae6ff',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#70fff1',
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