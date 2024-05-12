import React, { FC, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { BLUE, DARK_LIGHT, FON, PURPLE } from '../constants/colors';
import ProfileHeader from '../components/headers/ProfileHeader';
import Icon from '../components/Icon';

import smallArrow from '../svg/smallArrow.svg';
import { SIZES } from '../constants/fonts';
import ProfileMenuItem from '../components/ProfileMenuItem';
import { Routes } from '../navigation/routes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setProfile } from '../store/profileSlice';
import { fetchProfile } from '../services/APIService';

export interface ProfileScreenProps {
  //
  navigation: any; //!
}

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
    navigation.navigate(Routes.ProfileFormScreen);
  };

  // const btn = () => {
  //   console.log('\n profile: ', profile);
  // };

  const loadProfile = () => {
    fetchProfile(dispatch);
  };

  useEffect(() => {
    loadProfile();
  }, [dispatch]);

  if (isLoading) {
    return (
      <ActivityIndicator size='large' animating={isLoading} color={BLUE} />
    );
  }

  return (
    <View style={styles.container}>
      <ProfileHeader profile={profile} />
      <ProfileMenuItem
        onMenuItemPress={navigateToHistory}
        // onMenuItemPress={btn}
        text={'Check previous orders'}
      />
      <ProfileMenuItem
        onMenuItemPress={navigateToForm}
        text={'Personal data'}
      />
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
