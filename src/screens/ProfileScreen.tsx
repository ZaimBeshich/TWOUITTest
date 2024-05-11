import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProfileScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    backgroundColor: 'gray',
  },
});
