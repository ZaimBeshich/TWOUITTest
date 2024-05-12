import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { BLUE_10 } from '../constants/colors';

const Divider: FC = () => {
  return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    borderTopWidth: 1,
    borderRadius: 20,
    borderColor: BLUE_10,
    marginVertical: 2,
  },
});
