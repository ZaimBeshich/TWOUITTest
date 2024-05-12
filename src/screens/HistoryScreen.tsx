import React, { FC, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { BLUE, FON } from '../constants/colors';

import HistoryScreenHeader from '../components/headers/HistoryScreenHeader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchHistory } from '../services/APIService';
import HistoryItem from '../components/HistoryItem';
import Divider from '../components/Divider';

export interface HistoryScreenProps {
  navigation: any; //!
}

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
    fetchHistory(dispatch);
  };

  useEffect(() => {
    loadHistory();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <HistoryScreenHeader goBack={goBack} />
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' animating={isLoading} color={BLUE} />
        </View>
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
