import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { Routes } from './routes';

import { TURQUOISE } from '../constants/colors';
import {
  useSafeAreaInsets,
  withSafeAreaInsets,
} from 'react-native-safe-area-context';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator<any>(); //!

const CartNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.CartScreen}>
      <Stack.Screen name={Routes.CartScreen} component={CartScreen} />
    </Stack.Navigator>
  );
};
export default CartNavigator;

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: TURQUOISE,
  },
});
