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

const Stack = createNativeStackNavigator<any>(); //!

const CatalogNavigator: FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: [styles.contentStyle, {paddingTop: insets.top + 6}],
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
export default withSafeAreaInsets(CatalogNavigator);

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    backgroundColor: TURQUOISE,
  },
});
