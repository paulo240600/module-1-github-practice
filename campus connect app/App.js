import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CampusCard from './src/components/CampusCard';

export default function App() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.scrollContent}>
      <StatusBar style="light" />

      {/* Campus Connect Header */}
      <View style={styles.hero}>
        <Text style={styles.kicker}>MODULE 1 BUILD</Text>
        <Text style={styles.title}>Campus Connect</Text>
        <Text style={styles.subtitle}>Your campus. Your day. Your way.</Text>
      </View>

      {/* Section Heading */}
      <Text style={styles.sectionHeading}>What's Happening?</Text>

      {/* Card 1: Game Lounge */}
      <CampusCard
        emoji="🎮"
        title="Game Lounge"
        description="Drop in, play games, and meet other students."
        status="OPEN TODAY"
        accent="#FF2A85"
      />

      {/* Card 2: Study Jam */}
      <CampusCard
        emoji="📚"
        title="Study Jam"
        description="Group study sessions, quiet zones, and free coffee at the library."
        status="TONIGHT"
        accent="#00E5FF"
      />

      {/* Card 3: Campus Eats */}
      <CampusCard
        emoji="🍕"
        title="Campus Eats"
        description="Discover local food trucks and free weekly slice pop-ups on the Quad."
        status="TOMORROW"
        accent="#FF9100"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0B1020',
  },
  scrollContent: {
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
});