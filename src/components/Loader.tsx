import React, { FC } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { BLUE } from '../constants/colors';

export type LoadingProps = {
  isLoading: boolean;
};

const Loader: FC<LoadingProps> = (props) => {
  const { isLoading } = props;

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' animating={isLoading} color={BLUE} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
