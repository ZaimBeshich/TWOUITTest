import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './routes';

import CatalogItemScreen from '../screens/CatalogItemScreen';
import CatalogScreen from '../screens/CatalogScreen';
import { RootStackParamList } from '../constants/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const CatalogNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.CatalogScreen}>
      <Stack.Screen name={Routes.CatalogScreen} component={CatalogScreen} />
      <Stack.Screen
        name={Routes.CatalogItemScreen}
        component={CatalogItemScreen}
      />
    </Stack.Navigator>
  );
};
export default CatalogNavigator;
