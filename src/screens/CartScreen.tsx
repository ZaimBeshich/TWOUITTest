import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import CatalogHeader from '../components/CatalogHeader';
import {BLUE, BLUE_10, DARK, FON} from '../constants/colors';
import {Product} from '../constants/types';
import {Routes} from '../navigation/routes';
import {getCart, getProducts} from '../services/APIService';
import CatalogItem from '../components/CatalogItem';
import CartHeader from '../components/CartHeader';
import Button from '../components/Button';
import CartItem, {CartItemProps} from '../components/CartItem';
import {SIZES} from '../constants/fonts';

const CartScreen: FC = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const loadCart = async () => {
    setIsLoading(true);
    try {
      await getCart().then(res => {
        const sorted = res
          .map(el => el.item)
          .sort((a, b) => Number(b.price) - Number(a.price));
        setData(sorted);
        console.log('\n sorted: ', sorted);
        const sum = sorted.reduce((acc, el) => acc + Number(el.price), 0);
        setTotal(sum);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  const renderItem = ({item, index}: CartItemProps) => (
    <CartItem item={item} index={index} />
  );

  const renderDivider = () => <View style={styles.divider} />;

  const onPress = () => console.log(data);

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" animating={isLoading} color={BLUE} />
      ) : (
        <View style={styles.content}>
          <CartHeader />

          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(_item, index) => String(index)}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={renderDivider}
            removeClippedSubviews
            style={styles.list}
            refreshing={isLoading}
            onRefresh={loadCart}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>{`Total: ${total} ₽`}</Text>
            <Button
              title="confirm order"
              onPress={onPress}
              buttonStyle={styles.button}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: FON,
  },
  divider: {
    borderTopWidth: 1,
    borderRadius: 20,
    borderColor: BLUE_10,
    marginVertical: 2,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  list: {
    marginHorizontal: 14,
  },

  footer: {
    borderTopWidth: 1,
    borderRadius: 20,
    borderColor: BLUE_10,
    padding: 14,
  },
  total: {
    color: DARK,
    fontSize: SIZES.TEXT_16,
    marginBottom: 12,
  },
  button: {
    width: '80%',
  },
});
