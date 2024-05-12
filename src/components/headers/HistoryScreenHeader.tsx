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

import gear from '../svg/gear.svg';
import Icon from '../Icon';

interface HistoryScreenHeaderProps {
  goBack: () => void;
}

const HistoryScreenHeader: FC<HistoryScreenHeaderProps> = (props) => {
  const { goBack } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Text style={styles.text}>Back to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: WIDTH,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: TURQUOISE,
  },
  text: {
    textAlign: 'center',
    fontSize: SIZES.TEXT_14,
    color: WHITE,
  },
});

export default HistoryScreenHeader;
