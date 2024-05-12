import { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomModal from '../CustomModal';
import Icon from '../Icon';

import fail from '../../svg/fail.svg';
import { RED } from '../../constants/colors';
import { WIDTH } from '../../constants/constants';
import { SIZES } from '../../constants/fonts';

export type ErrorModalProps = {
  isErrorModalVisible: boolean;
  onErrorModalCancel: () => void;
};

const ErrorModal: FC<ErrorModalProps> = (props) => {
  const { isErrorModalVisible, onErrorModalCancel } = props;
  return (
    <CustomModal
      isVisible={isErrorModalVisible}
      onCancel={onErrorModalCancel}
      style={styles.modalMask}>
      <View style={styles.modalContainer}>
        <Icon icon={fail} width={45} height={45} />
        <Text style={styles.errorModalText}>Cart is Empty!</Text>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  modalMask: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    height: 200,
    width: WIDTH - 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  errorModalText: {
    marginTop: 10,
    fontSize: SIZES.TEXT_18,
    color: RED,
  },
});

export default ErrorModal;
