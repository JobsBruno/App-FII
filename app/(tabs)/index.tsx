import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/invest.jpg')}
          style={styles.reactLogo}
        />
      }
    > 
      <ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">UIS (SIU ao contrário)</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <Image
          source={require('@/assets/images/NOMEAI.png')}
          style={styles.print}
        />
        <Image
          source={require('@/assets/images/OnFire.png')}
          style={styles.print}
        />
      </ThemedView>
    
        
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    
  },
  stepContainer: {
    marginBottom: 8, 
  },
  reactLogo: {
    height: 310,
    width: '100%', 
    resizeMode: 'cover',
  },
  print: {

    resizeMode: 'contain',
  },
  print1: {


  },
});