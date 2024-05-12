import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { DARK_LIGHT, FON, PURPLE } from '../constants/colors';
import ProfileHeader from '../components/headers/ProfileHeader';
import Icon from '../components/Icon';

import smallArrow from '../svg/smallArrow.svg';
import { SIZES } from '../constants/fonts';
import ProfileMenuItem from '../components/ProfileMenuItem';
import HistoryScreen from './HistoryScreen';
import HistoryScreenHeader from '../components/headers/HistoryScreenHeader';
import Button from '../components/Button';
import { WIDTH } from '../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile, setProfileLoading } from '../store/profileSlice';
import { fetchProfile, updateProfile } from '../services/APIService';
import { RootState } from '../store/store';

export interface ProfileFormScreenProps {
  //
  navigation: any; //!
  route: any; //!
}

const ProfileFormScreen: FC<ProfileFormScreenProps> = (props) => {
  const dispatch = useDispatch();
  const { profile, isLoading } = useSelector(
    (state: RootState) => state.profile
  );
  const { navigation } = props;
  const { name = '', email = '' } = profile;

  const [inputName, onChangeName] = useState(name);
  const [inputEmail, onChangeEmail] = useState(email);
  console.log('\nprofile: ', profile);

  const goBack = () => {
    navigation.goBack();
  };

  const loadProfile = () => {
    fetchProfile(dispatch);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const onPressSave = async () => {
    dispatch(setProfileLoading(true));
    const newProfile = { name: inputName, email: inputEmail };

    console.log('\n newProfile: ', newProfile);
    try {
      // await updateProfile(inputName, inputEmail);
    } catch (err) {
      console.error('\n Save profile err: ', err);
    } finally {
      // loadProfile();
      dispatch(setProfileLoading(false));
    }
    // dispatch(setProfile({ name: inputName, email: inputEmail }));
  };

  return (
    <View style={styles.container}>
      <HistoryScreenHeader goBack={goBack} />
      <View style={styles.forms}>
        <TextInput
          value={inputName}
          defaultValue={name}
          onChange={onChangeName}
          keyboardType='default'
          style={styles.input}
        />
        <TextInput
          value={inputEmail}
          defaultValue={email}
          onChange={onChangeEmail}
          keyboardType='email-address'
          style={styles.input}
        />
      </View>
      <Button title='Save' onPress={onPressSave} buttonStyle={styles.button} />
    </View>
  );
};

export default ProfileFormScreen;

const containerMarginHorizontal = 14;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: FON,
  },
  forms: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 12,
    marginHorizontal: containerMarginHorizontal,
  },
  input: {
    marginBottom: 8,
    borderWidth: 2,
    borderColor: PURPLE,
    borderRadius: 12,
    textAlign: 'left',
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: SIZES.TEXT_16,
  },
  button: {
    width: WIDTH - containerMarginHorizontal * 2,
  },
});
