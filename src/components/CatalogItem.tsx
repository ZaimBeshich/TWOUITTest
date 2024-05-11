import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Product} from '../constants/types';
import {WIDTH} from '../constants/constants';
import Button from './Button';
import {SIZES} from '../constants/fonts';
import {scale, verticalScale} from '../utils/scale';
import {addToCart} from '../services/APIService';

interface CatalogItemProps {
  item: Product;
  index: number;
  navigateToItemScreen: (item: Product) => void;
}

const CatalogItem = ({
  item,
  index,
  navigateToItemScreen,
}: CatalogItemProps): JSX.Element => {
  const {title, price, image} = item;

  const onPressButton = () => {
    addToCart({item});
  };

  const isMarginRight = () => {
    return (index + 1) % 3 !== 0;
  };

  return (
    <TouchableOpacity
      onPress={navigateToItemScreen}
      style={[styles.container, isMarginRight() && styles.marginRight]}>
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>

      <Button title={`${price} ₽`} onPress={onPressButton} />
    </TouchableOpacity>
  );
};

const CONTAINER_MARGIN = 14 * 2;
const MARGIN_RIGHT = 8;
const ITEM_WIDTH = WIDTH / 3 - CONTAINER_MARGIN + MARGIN_RIGHT * 2 - 4;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    width: scale(ITEM_WIDTH),
    marginBottom: 8,
  },
  marginRight: {
    marginRight: MARGIN_RIGHT,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: scale(ITEM_WIDTH - 2),
    height: verticalScale(70),
    borderRadius: 12,
    resizeMode: 'cover',
  },
  title: {
    marginVertical: 10,
    fontSize: SIZES.TEXT_16,
    textAlign: 'center',
    paddingHorizontal: 4,
  },
});

export default CatalogItem;
