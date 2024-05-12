import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './routes';
import {} from '../screens';
import {
  useSafeAreaInsets,
  withSafeAreaInsets,
} from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import CatalogNavigator from './CatalogNavigator';
import CatalogScreen from '../screens/CatalogScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {
  BLUE_10,
  DARK_LIGHT,
  GREY_LINK,
  LIGHT,
  LIGHT_BLUE,
  PURPLE,
} from '../constants/colors';
import { SIZES } from '../constants/fonts';
import CartNavigator from './CartNavigator';
import ProfileNavigator from './ProfileNavigator';
import Icon from '../components/Icon';
import { getTabBarIcon } from '../utils/tabNavigatorUtils';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => getTabBarIcon(route.name, focused),
        headerShown: false,
        tabBarStyle: [
          styles.tabBarStyle,
          { paddingBottom: insets.bottom + 8, height: 60 + insets.bottom },
        ],
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarItemStyle: styles.tabBarItem,
        tabBarActiveTintColor: PURPLE,
        tabBarInactiveTintColor: BLUE_10,
      })}>
      <Tab.Screen
        name={Routes.Catalog}
        component={CatalogNavigator}
        options={{ tabBarLabel: 'Catalog' }}
      />
      <Tab.Screen
        name={Routes.Cart}
        component={CartNavigator}
        options={{ tabBarLabel: 'Cart' }}
      />
      <Tab.Screen
        name={Routes.Profile}
        component={ProfileNavigator}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

export default withSafeAreaInsets(TabNavigator);

const styles = StyleSheet.create({
  tabBarStyle: {
    paddingTop: 16,
    height: 60,
    backgroundColor: LIGHT,
    borderTopColor: LIGHT_BLUE,
    borderTopWidth: 1,
  },
  tabBarItem: {
    borderRightWidth: 1,
    borderRightColor: LIGHT_BLUE,
  },
  tabBarLabelStyle: {
    marginTop: 8,
    fontSize: SIZES.TEXT_14,
  },
});
