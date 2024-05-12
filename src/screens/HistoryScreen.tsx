import React, { FC, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { BLUE, FON } from '../constants/colors';

import HistoryScreenHeader from '../components/headers/HistoryScreenHeader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getHistory } from '../services/APIService';
import HistoryItem from '../components/HistoryItem';
import Divider from '../components/Divider';
import Loader from '../components/Loader';
import { HistoryScreenProps } from '../constants/types';

const HistoryScreen: FC<HistoryScreenProps> = (props) => {
  const { navigation } = props;

  const dispatch = useDispatch();
  const { history, isLoading } = useSelector(
    (state: RootState) => state.profile
  );

  const goBack = () => {
    navigation.goBack();
  };

  const loadHistory = () => {
    getHistory(dispatch);
  };

  useEffect(() => {
    loadHistory();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <HistoryScreenHeader goBack={goBack} />
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <FlatList
          data={history}
          renderItem={({ item }) => <HistoryItem el={item} />}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Divider />}
          refreshing={isLoading}
          onRefresh={loadHistory}
        />
      )}
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: FON,
  },
});
