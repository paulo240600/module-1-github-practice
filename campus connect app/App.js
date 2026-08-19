import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />

      <View style={styles.hero}>
        <Text style={styles.kicker}>MODULE 1 BUILD</Text>
        <Text style={styles.title}>Campus Connect</Text>
        <Text style={styles.subtitle}>Your campus. Your day. Your way.</Text>
      </View>

      <View style={styles.starterCard}>
        <Text style={styles.starterEmoji}>🚀</Text>
        <Text style={styles.starterTitle}>Your starter app is running.</Text>
        <Text style={styles.starterText}>
          Open README.md and begin Build Stage 1. You will build the app one visible step at a time.
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
  starterCard: {
    backgroundColor: '#151B31',
    borderColor: '#2A3357',
    borderRadius: 20,
    borderWidth: 1,
    padding: 22,
  },
  starterEmoji: {
    fontSize: 32,
  },
  starterTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 12,
  },
  starterText: {
    color: '#AEB8D4',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
});
