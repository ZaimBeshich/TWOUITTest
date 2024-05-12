import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { BLUE, BLUE_10, DARK, FON } from '../constants/colors';
import CartHeader from '../components/headers/CartHeader';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import { SIZES } from '../constants/fonts';
import { useDispatch, useSelector } from 'react-redux';

import {
  removeItem,
  clearCart,
  setCartItems,
  setCartLoading,
} from '../store/cartSlice';
import { RootState } from '../store/store';

import { createOrder, getHistory } from '../services/APIService';
import { getTotal, serializeOrder } from '../utils/serialize';
import Divider from '../components/Divider';
import ConfirmedOrderModal from '../components/modals/ConfirmedOrderModal';
import ErrorModal from '../components/modals/ErrorModal';
import { CartScreenProps } from '../constants/types';

const CartScreen: FC<CartScreenProps> = () => {
  const dispatch = useDispatch();
  const { items: cartItems, isLoading } = useSelector(
    (state: RootState) => state.cart
  );

  const [total, setTotal] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const onConfirmPress = () => {
    if (!!cartItems.length) {
      makeOrder();
    } else {
      setIsErrorModalVisible(true);
    }
  };

  const handleRemove = (itemId: number) => {
    dispatch(removeItem(String(itemId)));
  };

  const makeOrder = async () => {
    const order = serializeOrder(cartItems);
    try {
      await createOrder(order, dispatch);
      dispatch(clearCart());
    } catch (error) {
      console.error('\n Cart error: ', error);
    } finally {
      getHistory(dispatch);
      setIsModalVisible(true);
    }
  };

  const renderEmptyList = () => {
    return <Text style={styles.emptyCart}>{'Empty\nCart'}</Text>;
  };

  const onCancel = () => {
    setIsModalVisible(false);
  };

  const onErrorModalCancel = () => {
    setIsErrorModalVisible(false);
  };

  useEffect(() => {
    dispatch(setCartLoading(true));
    dispatch(setCartItems(cartItems));

    const total = getTotal(cartItems);
    setTotal(total);

    dispatch(setCartLoading(false));
  }, [cartItems]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' animating={isLoading} color={BLUE} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CartHeader />

        <FlatList
          data={cartItems}
          renderItem={({ item, index }) => (
            <CartItem item={item} index={index} handleRemove={handleRemove} />
          )}
          keyExtractor={(_item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Divider />}
          ListEmptyComponent={renderEmptyList}
          removeClippedSubviews
          style={styles.list}
          refreshing={isLoading}
        />
        <View style={styles.footer}>
          <Text style={styles.total}>{`Total: ${total} ₽`}</Text>

          <Button title='confirm order' onPress={onConfirmPress} />
        </View>
      </View>
      <ConfirmedOrderModal
        isModalVisible={isModalVisible}
        onCancel={onCancel}
      />
      <ErrorModal
        isErrorModalVisible={isErrorModalVisible}
        onErrorModalCancel={onErrorModalCancel}
      />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {
    flexDirection: 'row',
    color: DARK,
    fontSize: SIZES.TEXT_16,
    marginBottom: 12,
  },
  emptyCart: {
    textAlign: 'center',
    fontSize: SIZES.TEXT_18,
    color: DARK,
    textTransform: 'uppercase',
    lineHeight: 30,
    marginTop: 50,
  },
});
