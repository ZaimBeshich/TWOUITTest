import React, { FC, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FON } from '../constants/colors';
import ProfileHeader from '../components/headers/ProfileHeader';

import ProfileMenuItem from '../components/ProfileMenuItem';
import { Routes } from '../navigation/routes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getProfile } from '../services/APIService';
import Loader from '../components/Loader';
import { ProfileScreenProps } from '../constants/types';

const ProfileScreen: FC<ProfileScreenProps> = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { profile, isLoading } = useSelector(
    (state: RootState) => state.profile
  );

  const navigateToHistory = () => {
    navigation.navigate(Routes.HistoryScreen);
  };

  const navigateToForm = () => {
    navigation.navigate(Routes.ProfileFormScreen, { profile });
  };

  const loadProfile = () => {
    getProfile(dispatch);
  };

  useEffect(() => {
    loadProfile();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <ProfileHeader profile={profile} toForm={navigateToForm} />
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          <ProfileMenuItem
            onMenuItemPress={navigateToHistory}
            text={'Check previous orders'}
          />
          <ProfileMenuItem
            onMenuItemPress={navigateToForm}
            text={'Personal data'}
          />
        </>
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: FON,
  },
});
