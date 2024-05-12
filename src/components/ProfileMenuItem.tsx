import React, { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { DARK_LIGHT, PURPLE } from '../constants/colors';
import { SIZES } from '../constants/fonts';
import Icon from './Icon';

import smallArrow from '../svg/smallArrow.svg';

export type ProfileMenuItemProps = {
  onMenuItemPress: () => void;
  text: string;
};

const ProfileMenuItem: FC<ProfileMenuItemProps> = (props) => {
  const { onMenuItemPress, text } = props;
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onMenuItemPress}>
      <Text style={styles.menuItemText}>{text}</Text>
      <Icon icon={smallArrow} width={20} height={20} style={styles.arrow} />
    </TouchableOpacity>
  );
};

export default ProfileMenuItem;

const styles = StyleSheet.create({
  menuItem: {
    borderWidth: 1,
    borderColor: DARK_LIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 14,
    borderRadius: 12,
    paddingVertical: 8,
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: SIZES.TEXT_18,
    fontWeight: 'bold',
    color: DARK_LIGHT,
    marginLeft: 4,
  },
  arrow: {
    fill: PURPLE,
    transform: [{ rotate: '-90deg' }],
  },
});
