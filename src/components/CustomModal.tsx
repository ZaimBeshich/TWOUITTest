import React from 'react';

import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { BLUE_10 } from '../constants/colors';

export type CustomModalProps = {
  isVisible: boolean;
  onCancel: () => void;
  children: any;
  style?: {};
};

const CustomModal = (props: CustomModalProps): JSX.Element => {
  const { isVisible, onCancel, children, style } = props;

  return (
    <Modal animationType='fade' transparent={true} visible={isVisible}>
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.mask, style]}
        onPress={onCancel}>
        <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mask: {
    flex: 1,
    backgroundColor: BLUE_10,
    justifyContent: 'flex-end',
  },
});

export default CustomModal;
