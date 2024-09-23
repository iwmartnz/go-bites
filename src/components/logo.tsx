import React from 'react';
import { Text } from './ui';
import { StyleSheet } from 'react-native';

export default function Logo() {
  return <Text style={styles.text}>bites</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Quantify',
    fontSize: 70,
    lineHeight: 70,
  },
});
