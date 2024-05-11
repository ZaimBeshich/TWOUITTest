import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';

import {Routes} from './routes';

import {TURQUOISE} from '../constants/colors';
import CatalogItemScreen from '../screens/CatalogItemScreen';
import CatalogScreen from '../screens/CatalogScreen';
import {
  useSafeAreaInsets,
  withSafeAreaInsets,
} from 'react-native-safe-area-context';
import CartScreen from '../screens/CartScreen';
import CartHeader from '../components/CartHeader';

const Stack = createNativeStackNavigator<any>(); //!

const CartNavigator: FC = () => {
  //  <CartHeader />;
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: [styles.contentStyle, {paddingTop: insets.top + 6}],
      }}
      initialRouteName={Routes.CartScreen}>
      <Stack.Screen name={Routes.CartScreen} component={CartScreen} />
    </Stack.Navigator>
  );
};
export default withSafeAreaInsets(CartNavigator);

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: TURQUOISE,
  },
});
