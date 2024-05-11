import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
} from 'react-native';
import Item from '../components/CatalogItem';
import {products} from '../constants/products';
import {Product} from '../constants/types';
import {BLUE, BLUE_10, FON} from '../constants/colors';
import {scale, verticalScale} from '../utils/scale';
import {WIDTH} from '../constants/constants';
import {SIZES} from '../constants/fonts';
import Button from '../components/Button';
import CatalogItemHeader from '../components/CatalogItemHeader';
import {addToCart, getCart} from '../services/APIService';

// type CatalogItemScreen = {
//   item: Product;
// };

const CatalogItemScreen = props => {
  const {
    navigation,
    route: {
      params: {item},
    },
  } = props;
  const {price, product_type, title, image} = item;

  const onPressButton = () => {
    addToCart({item});
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <CatalogItemHeader goBack={goBack} />
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.row}>
        <Text style={styles.title}> Title: </Text>
        <Text style={styles.subtitle}>{title}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}> Category: </Text>
        <Text style={styles.subtitle}>{product_type}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}> Price: </Text>
        <Text style={styles.subtitle}>{`${price} ₽`}</Text>
      </View>

      <Button
        title="Buy now"
        onPress={onPressButton}
        buttonStyle={styles.button}
      />
    </View>
  );
};

export default CatalogItemScreen;

const PADDING_HORIZONTAL = 14;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: PADDING_HORIZONTAL,
    backgroundColor: FON,
  },
  image: {
    width: scale(WIDTH - PADDING_HORIZONTAL * 2),
    height: verticalScale(200),
    borderRadius: 12,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: SIZES.TEXT_18,
    fontWeight: 'bold',
    letterSpacing: 1.6,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: SIZES.TEXT_16,
    textAlign: 'left',
  },
  button: {
    position: 'absolute',
    bottom: 10,
  },
});
