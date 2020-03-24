import React from 'react';
import { tw } from '../../utils';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  label: string;
}

const Primary: React.FC<IProps> = ({ label }) => (
  <View style={styles.badge}>
    <Text style={styles.label}>{label.toUpperCase()}</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    backgroundColor: tw.color.light.primary200,
    borderRadius: tw.borderRadius.full,
    paddingHorizontal: tw.padding.p2,
    paddingVertical: tw.padding.p1,
  },
  label: {
    color: tw.color.light.primary800,
    fontSize: tw.text.xs,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Primary;
