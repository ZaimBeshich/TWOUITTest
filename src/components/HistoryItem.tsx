import React, { FC } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from '../utils/scale';

const HistoryItem: FC<HistoryItemProps> = (props) => {
  const { el } = props;
  return (
    <View key={String(el.id)} style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: el.image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text>{`Order  № ${el.id}`}</Text>
        <Text>{`Total: ${el.total}  ₽`}</Text>
      </View>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: 14,
    marginVertical: 8,
    borderRadius: 12,
  },
  imageContainer: {
    width: scale(90),
    height: verticalScale(65),
    borderRadius: 12,
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});
