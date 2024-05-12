import React, { FC } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WIDTH } from '../../constants/constants';
import { SIZES } from '../../constants/fonts';
import {
  DARK_LIGHT,
  LIGHT_FON,
  TURQUOISE,
  WHITE,
} from '../../constants/colors';

import gear from '../../svg/gear.svg';
import Icon from '../Icon';
import { Profile } from '../../store/profileSlice';

interface ProfileHeaderProps {
  profile: Profile;
  toForm: () => void;
}

const ProfileHeader: FC<ProfileHeaderProps> = (props: ProfileHeaderProps) => {
  const {
    profile: { name = '' },
    toForm,
  } = props;

  const onGearPress = () => {
    toForm();
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatar}>{name[0]}</Text>
      </View>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity onPress={onGearPress}>
        <Icon icon={gear} width={22} height={22} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WIDTH,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: TURQUOISE,
    marginBottom: 10,
  },
  avatarContainer: {
    borderRadius: 8,
    backgroundColor: LIGHT_FON,
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
  },
  avatar: {
    textTransform: 'capitalize',
    fontSize: SIZES.TEXT_18,
    fontWeight: 'bold',
    color: DARK_LIGHT,
  },
  name: {
    color: WHITE,
    fontSize: SIZES.TEXT_16,
  },
});

export default ProfileHeader;
