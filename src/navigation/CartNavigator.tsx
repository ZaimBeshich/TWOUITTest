import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './routes';

import CartScreen from '../screens/CartScreen';
import { RootStackParamList } from '../constants/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
