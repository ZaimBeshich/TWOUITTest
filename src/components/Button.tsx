import React from 'react';

import {
  ButtonProps,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {DARK, GREEN, LIGHT, WHITE} from '../constants/colors';
import {SIZES} from '../constants/fonts';

interface IButtonProps extends ButtonProps {
  title: string;
  onPress: () => void;
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
}

const Button = ({
  title,
  onPress,
  textStyle,
  buttonStyle,
  disabled,
}: IButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, disabled && styles.disabledButton, buttonStyle]}
      disabled={disabled}>
      <Text
        style={[
          styles.title,
          disabled && styles.disabledButtonTitle,
          textStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 14,
    backgroundColor: GREEN,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 12,
    width: '100%',
  },
  title: {
    fontSize: SIZES.TEXT_14,
    color: WHITE,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  disabledButton: {
    backgroundColor: LIGHT,
  },
  disabledButtonTitle: {
    color: DARK,
  },
});

export default Button;
