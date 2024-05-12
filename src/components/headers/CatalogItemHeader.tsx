import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WIDTH } from '../../constants/constants';
import { SIZES } from '../../constants/fonts';
import { TURQUOISE, WHITE } from '../../constants/colors';

interface CatalogItemHeaderProps {
  goBack: () => void;
}

const CatalogItemHeader = (props: CatalogItemHeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.goBack}>
        <Text style={styles.text}>Back to Catalog</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    width: WIDTH,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: TURQUOISE,
  },
  text: {
    textAlign: 'center',
    fontSize: SIZES.TEXT_14,
    color: WHITE,
  },
});

export default CatalogItemHeader;
