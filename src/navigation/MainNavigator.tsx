import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';

import {Routes} from './routes';

import TabNavigator from './TabNavigator';
import {FON} from '../constants/colors';
import CatalogScreen from '../screens/CatalogScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CatalogNavigator from './CatalogNavigator';
import CartNavigator from './CartNavigator';

const Stack = createNativeStackNavigator<any>(); //!

const MainNavigator: FC = () => {
  return (
    <View style={styles.navigationContainer}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: styles.contentStyle,
        }}
        initialRouteName={Routes.CatalogScreen}>
        <Stack.Screen name={Routes.Tab} component={TabNavigator} />
        <Stack.Screen name={Routes.Catalog} component={CatalogNavigator} />
        <Stack.Screen name={Routes.Cart} component={CartNavigator} />
        <Stack.Screen name={Routes.ProfileScreen} component={ProfileScreen} />
      </Stack.Navigator>
    </View>
  );
};
export default MainNavigator;

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
  },
  contentStyle: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: FON,
  },
});
