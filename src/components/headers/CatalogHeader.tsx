import React, { useState } from 'react';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Product } from '../../constants/types';
import { WIDTH } from '../../constants/constants';
import Button from '../Button';
import { SIZES } from '../../constants/fonts';
import { scale, verticalScale } from '../../utils/scale';
import {
  DARK_LIGHT,
  LIGHT_BLUE,
  TURQUOISE,
  WHITE,
} from '../../constants/colors';

interface CatalogHeaderProps {
  sortByCheap: () => void;
  sortByTop: () => void;
}

const CatalogHeader = (props: CatalogHeaderProps): JSX.Element => {
  const { sortByCheap, sortByTop } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={sortByTop}>
        <Text style={styles.listText}>Expensive first</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={sortByCheap}>
        <Text style={styles.listText}>Cheap first</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WIDTH,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: TURQUOISE,
  },
  listText: {
    textAlign: 'center',
    fontSize: SIZES.TEXT_16,
    color: WHITE,
  },
});

export default CatalogHeader;
