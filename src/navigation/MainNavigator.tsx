import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

import { Routes } from './routes';

import TabNavigator from './TabNavigator';
import { TURQUOISE } from '../constants/colors';
import CatalogNavigator from './CatalogNavigator';
import CartNavigator from './CartNavigator';
import ProfileNavigator from './ProfileNavigator';
import {
  useSafeAreaInsets,
  withSafeAreaInsets,
} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator<any>(); //!

const MainNavigator: FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.navigationContainer}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: [styles.contentStyle, { paddingTop: insets.top + 6 }],
        }}
        initialRouteName={Routes.CatalogScreen}>
        <Stack.Screen name={Routes.Tab} component={TabNavigator} />
        <Stack.Screen name={Routes.Catalog} component={CatalogNavigator} />
        <Stack.Screen name={Routes.Cart} component={CartNavigator} />
        <Stack.Screen name={Routes.Profile} component={ProfileNavigator} />
      </Stack.Navigator>
    </View>
  );
};
export default withSafeAreaInsets(MainNavigator);

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
  },
  contentStyle: {
    flex: 1,
    backgroundColor: TURQUOISE,
  },
});
