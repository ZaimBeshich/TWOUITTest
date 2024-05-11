import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Product} from '../constants/types';
import {WIDTH} from '../constants/constants';
import Button from './Button';
import {SIZES} from '../constants/fonts';
import {scale, verticalScale} from '../utils/scale';
import {addToCart} from '../services/APIService';
import {DARK} from '../constants/colors';

export interface CartItemProps {
  item: Product;
  index: number;
}

const CartItem = ({item, index}: CartItemProps): JSX.Element => {
  const {title, price, image} = item;

  return (
    <View style={styles.container} key={index}>
      <Image source={{uri: image}} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.title} ellipsizeMode="tail">
          {`${price} ₽`}
        </Text>
      </View>
    </View>
  );
};

const CONTAINER_MARGIN = 14 * 2;
const MARGIN_RIGHT = 8;
const ITEM_WIDTH = WIDTH / 3 - CONTAINER_MARGIN + MARGIN_RIGHT * 2 - 4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 12,
  },
  marginRight: {
    marginRight: MARGIN_RIGHT,
  },
  image: {
    width: scale(ITEM_WIDTH - 2),
    height: verticalScale(70),
    borderRadius: 12,
    resizeMode: 'cover',
    marginRight: MARGIN_RIGHT,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: verticalScale(70),
  },
  title: {
    textAlign: 'left',
    fontSize: SIZES.TEXT_14,
    color: DARK,
  },
});

export default CartItem;
