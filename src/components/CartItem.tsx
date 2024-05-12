import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import { Product } from '../constants/types';
import { WIDTH } from '../constants/constants';
import { SIZES } from '../constants/fonts';
import { scale, verticalScale } from '../utils/scale';
import { DARK, GREY_LINK, GREY_MONTH } from '../constants/colors';

import close from '../svg/close.svg';
import Icon from './Icon';
import CustomModal from './CustomModal';

export interface CartItemProps {
  item: Product;
  index: number;
  handleRemove: (id: number) => void;
}

const CartItem = ({
  item,
  index,
  handleRemove,
}: CartItemProps): JSX.Element => {
  const {
    quantity,
    item: { image, price, title },
  } = item;

  const onClosePress = () => {
    handleRemove(item.id);
  };

  return (
    <View style={styles.container} key={index}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title} ellipsizeMode='tail' numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.title} ellipsizeMode='tail'>
          {`${price} ₽`}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={onClosePress}>
          <Icon icon={close} width={10} height={10} />
        </TouchableOpacity>
        <Text style={styles.title}>{`Кол-во: ${quantity}`}</Text>
      </View>
    </View>
  );
};

const bb = {
  id: 8,
  item: {
    id: 8,
    image:
      'https://www.notebookcheck-ru.com/fileadmin/Notebooks/News/_nc3/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg',
    price: '80000',
    product_type: 'Cult Products',
    title: 'IPod Touch 8GB',
  },
  quantity: 2,
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
    paddingTop: 8,
  },
  marginRight: {
    marginRight: MARGIN_RIGHT,
  },
  imageContainer: {
    width: scale(ITEM_WIDTH - 2),
    height: verticalScale(70),
    borderRadius: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'cover',
    marginRight: MARGIN_RIGHT,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: verticalScale(70),
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: verticalScale(70),
  },
  title: {
    textAlign: 'left',
    fontSize: SIZES.TEXT_14,
    color: DARK,
  },
  iconContainer: {
    backgroundColor: GREY_MONTH,
    borderRadius: 100,
    padding: 8,
  },
});

export default CartItem;
