import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './routes';

import ProfileScreen from '../screens/ProfileScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileFormScreen from '../screens/ProfileFormScreen';

const Stack = createNativeStackNavigator<any>(); //!

const ProfileNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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
