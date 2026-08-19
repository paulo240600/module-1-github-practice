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

      {/* New Section Heading */}
      <Text style={styles.sectionHeading}>What's Happening?</Text>

      {/* Game Lounge Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎮 Game Lounge</Text>
        <Text style={styles.cardDescription}>
          Drop in, play games, and meet other students.
        </Text>
        <Text style={styles.cardBadge}>OPEN TODAY</Text>
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
    marginBottom: 20,
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
  card: {
    backgroundColor: '#151B31',
    borderColor: '#2A3357',
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  cardDescription: {
    color: '#AEB8D4',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
  cardBadge: {
    color: '#5B4BFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginTop: 14,
  },
});