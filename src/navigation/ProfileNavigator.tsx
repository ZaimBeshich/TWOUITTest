import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { Routes } from './routes';

import { TURQUOISE } from '../constants/colors';
import {
  useSafeAreaInsets,
  withSafeAreaInsets,
} from 'react-native-safe-area-context';
import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileFormScreen from '../screens/ProfileFormScreen';

const Stack = createNativeStackNavigator<any>(); //!

const ProfileNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // contentStyle: [styles.contentStyle, { paddingTop: insets.top + 6 }],
      }}
      initialRouteName={Routes.ProfileScreen}>
      <Stack.Screen name={Routes.ProfileScreen} component={ProfileScreen} />
      <Stack.Screen name={Routes.HistoryScreen} component={HistoryScreen} />
      <Stack.Screen
        name={Routes.ProfileFormScreen}
        component={ProfileFormScreen}
      />
    </Stack.Navigator>
  );
};
export default ProfileNavigator;

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: TURQUOISE,
  },
});
