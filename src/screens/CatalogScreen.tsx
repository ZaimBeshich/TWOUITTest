import React, {FC, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ActivityIndicatorBase,
  Text,
} from 'react-native';
import Item from '../components/CatalogItem';
import {products} from '../constants/products';
import {Product} from '../constants/types';
import {BLUE, BLUE_10, FON} from '../constants/colors';
import {Routes} from '../navigation/routes';
import CatalogHeader from '../components/CatalogHeader';
import {getProducts} from '../services/APIService';
import CatalogItem from '../components/CatalogItem';

const CatalogScreen: FC = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    try {
      getProducts().then(res => setData(res));
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const renderItem = ({item, index}: {item: Product; index: number}) => {
    return (
      <CatalogItem
        item={item}
        index={index}
        navigateToItemScreen={() => navigateToItemScreen({item})}
      />
    );
  };

  const navigateToItemScreen = (item: Product) => {
    navigation.navigate(Routes.CatalogItemScreen, item);
  };

  const sortByCheap = (arr: Product[]) => {
    const newData = [...arr].sort((a, b) => Number(a.price) - Number(b.price));
    setData(newData);
  };

  const sortByTop = (arr: Product[]) => {
    const newData = [...arr].sort((a, b) => Number(b.price) - Number(a.price));
    setData(newData);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" animating={isLoading} color={BLUE} />
      ) : (
        <>
          <CatalogHeader
            sortByCheap={() => sortByCheap(data)}
            sortByTop={() => sortByTop(data)}
          />
          <FlatList
            data={data}
            renderItem={renderItem}
            removeClippedSubviews
            columnWrapperStyle={styles.itemsBorder}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            refreshing={isLoading}
          />
        </>
      )}
    </View>
  );
};

export default CatalogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    backgroundColor: FON,
  },
  itemsBorder: {
    borderTopWidth: 1,
    borderRadius: 20,
    borderColor: BLUE_10,
  },
});
