import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CampusCard from './src/components/CampusCard';
import { campusActivities } from './src/data/campusActivities';

export default function App() {
  const [selectedActivity, setSelectedActivity] = useState(null);

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

      {/* Dynamic Activity Cards via .map() */}
      {campusActivities.map((activity) => (
        <CampusCard
          key={activity.id}
          emoji={activity.emoji}
          title={activity.title}
          description={activity.description}
          status={activity.status}
          accent={activity.accent}
          onPress={() => setSelectedActivity(activity)}
        />
      ))}

      {/* Selection Panel */}
      <View style={styles.selectionPanel}>
        <Text style={styles.selectionTitle}>Selection Panel</Text>
        {selectedActivity ? (
          <Text style={styles.selectionTextActive}>
            You're checking out: <Text style={styles.highlightText}>{selectedActivity.title} {selectedActivity.emoji}</Text>
          </Text>
        ) : (
          <Text style={styles.selectionTextPlaceholder}>
            Pick a campus activity to see what you're checking out.
          </Text>
        )}
      </View>
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
  selectionPanel: {
    backgroundColor: '#151B31',
    borderColor: '#5B4BFF',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 20,
    marginTop: 12,
    marginBottom: 32,
  },
  selectionTitle: {
    color: '#C9C4FF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  selectionTextPlaceholder: {
    color: '#AEB8D4',
    fontSize: 16,
    fontStyle: 'italic',
  },
  selectionTextActive: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  highlightText: {
    color: '#00E5FF',
    fontWeight: '900',
  },
});