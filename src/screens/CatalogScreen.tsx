import React, { FC, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { CatalogScreenProps, Product } from '../constants/types';
import { BLUE, BLUE_10, FON } from '../constants/colors';
import { Routes } from '../navigation/routes';
import CatalogHeader from '../components/headers/CatalogHeader';
import { getProducts } from '../services/APIService';
import CatalogItem from '../components/CatalogItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setProducts } from '../store/productsSlice';
import { addItem } from '../store/cartSlice';
import { sortDown, sortUp } from '../utils/sort';
import Loader from '../components/Loader';

const CatalogScreen: FC<CatalogScreenProps> = (props) => {
  const dispatch = useDispatch();
  const { navigation } = props;
  const { products, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    loadCatalog();
  }, [dispatch]);

  const loadCatalog = async () => {
    await getProducts(dispatch);
  };

  const renderItem = ({ item, index }: { item: Product; index: number }) => {
    return (
      <CatalogItem
        item={item}
        index={index}
        navigateToItemScreen={() => navigateToItemScreen(item)}
        handleAddToCart={() => handleAddToCart(item)}
      />
    );
  };

  const handleAddToCart = (item: Product) => {
    dispatch(addItem({ id: item.id, item, quantity: 1 }));
  };

  const navigateToItemScreen = (item: Product) => {
    navigation.navigate(Routes.CatalogItemScreen, { item });
  };

  const sortByCheap = () => {
    dispatch(setProducts(sortDown([...products])));
  };

  const sortByTop = () => {
    dispatch(setProducts(sortUp([...products])));
  };

  return (
    <View style={styles.container}>
      <CatalogHeader sortByCheap={sortByCheap} sortByTop={sortByTop} />
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          removeClippedSubviews
          columnWrapperStyle={styles.itemsBorder}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          refreshing={isLoading}
          onRefresh={loadCatalog}
        />
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
