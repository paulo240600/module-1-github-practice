import React, { useRef, useState } from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/theme';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false); // 1. Add saved state
  
  const heartScale = useRef(new Animated.Value(1)).current;
  const bookmarkScale = useRef(new Animated.Value(1)).current; // 2. Add bookmark scale value

  function handleLike() {
    setLiked(v => !v);
    Animated.sequence([
      Animated.spring(heartScale, { toValue: 1.3, friction: 3, useNativeDriver: true }),
      Animated.spring(heartScale, { toValue: 1, friction: 4, useNativeDriver: true }),
    ]).start();
  }

  // 3. Handle bookmark toggle and animation
  function handleBookmark() {
    setSaved(v => !v);
    Animated.sequence([
      Animated.spring(bookmarkScale, { toValue: 1.25, friction: 3, useNativeDriver: true }),
      Animated.spring(bookmarkScale, { toValue: 1, friction: 4, useNativeDriver: true }),
    ]).start();
  }

  return (
    <View style={s.card}>
      <View style={s.header}>
        <View style={s.avatar}>
          <Text style={s.avatarText}>{post.username.slice(0, 2).toUpperCase()}</Text>
        </View>
        <View style={s.headerCopy}>
          <Text style={s.username}>{post.username}</Text>
          <Text style={s.location}>{post.location}</Text>
        </View>
        <Ionicons name='ellipsis-horizontal' size={21} color={colors.text} />
      </View>

      <Image source={post.image} style={s.image} />

      <View style={s.actions}>
        <Pressable onPress={handleLike}>
          <Animated.View style={{ transform: [{ scale: heartScale }] }}>
            <Ionicons name={liked ? 'heart' : 'heart-outline'} size={30} color={liked ? colors.accent : colors.text} />
          </Animated.View>
        </Pressable>

        <Ionicons name='chatbubble-outline' size={27} color={colors.text} />
        <Ionicons name='paper-plane-outline' size={27} color={colors.text} />
        <View style={s.spacer} />

        {/* 4. Wrap bookmark in Pressable and Animated.View */}
        <Pressable onPress={handleBookmark}>
          <Animated.View style={{ transform: [{ scale: bookmarkScale }] }}>
            <Ionicons 
              name={saved ? 'bookmark' : 'bookmark-outline'} 
              size={27} 
              color={saved ? colors.accent : colors.text} 
            />
          </Animated.View>
        </Pressable>
      </View>

      <Text style={s.likes}>{post.likes + (liked ? 1 : 0)} likes</Text>
      <Text style={s.caption}><Text style={s.username}>{post.username} </Text>{post.caption}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  card: { borderBottomWidth: 1, borderBottomColor: colors.line, paddingBottom: 20, marginBottom: 18 },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingBottom: 11 },
  avatar: { width: 38, height: 38, borderRadius: 19, backgroundColor: colors.panel, alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  avatarText: { color: colors.text, fontSize: 11, fontWeight: '800' },
  headerCopy: { flex: 1 },
  username: { color: colors.text, fontWeight: '800' },
  location: { color: colors.muted, fontSize: 12, marginTop: 2 },
  image: { width: '100%', aspectRatio: .95, backgroundColor: colors.panel },
  actions: { flexDirection: 'row', alignItems: 'center', gap: 17, paddingHorizontal: 14, paddingTop: 13 },
  spacer: { flex: 1 },
  likes: { color: colors.text, fontWeight: '800', paddingHorizontal: 14, marginTop: 11 },
  caption: { color: colors.text, paddingHorizontal: 14, marginTop: 7, lineHeight: 20 }
});