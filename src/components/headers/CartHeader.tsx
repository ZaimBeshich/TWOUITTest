import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WIDTH } from '../../constants/constants';
import { SIZES } from '../../constants/fonts';
import { TURQUOISE, WHITE } from '../../constants/colors';

interface CartHeaderProps {
  // goBack: () => void;
}

const CartHeader = (props: CartHeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: WIDTH,
    paddingVertical: 8,
    backgroundColor: TURQUOISE,
  },
  text: {
    textAlign: 'center',
    fontSize: SIZES.TEXT_16,
    color: WHITE,
    letterSpacing: 1.4,
  },
});

export default CartHeader;
