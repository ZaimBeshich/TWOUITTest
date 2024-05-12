import { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomModal from '../CustomModal';
import Icon from '../Icon';

import success from '../../svg/success.svg';
import { GREEN } from '../../constants/colors';
import { WIDTH } from '../../constants/constants';
import { SIZES } from '../../constants/fonts';

export type ModalProps = {
  isModalVisible: boolean;
  onCancel: () => void;
};

const ConfirmedOrderModal: FC<ModalProps> = (props) => {
  const { isModalVisible, onCancel } = props;
  return (
    <CustomModal
      isVisible={isModalVisible}
      onCancel={onCancel}
      style={styles.modalMask}>
      <View style={styles.modalContainer}>
        <Icon icon={success} width={45} height={45} />
        <Text style={styles.modalText}>Order Confirmed!</Text>
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
  modalText: {
    marginTop: 10,
    fontSize: SIZES.TEXT_18,
    color: GREEN,
  },
});

export default ConfirmedOrderModal;
