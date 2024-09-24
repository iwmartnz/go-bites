import { FlatList, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

import ProductListItem from '@/components/product-list-item';
import { useTheme } from '@/hooks/useTheme';

import products from '../../../../assets/data/products';

export default function MenuPage() {
  const { theme } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Menu',
          headerLargeTitle: true,
          headerSearchBarOptions: { autoCapitalize: 'none' },
        }}
      />
      <FlatList
        data={products}
        contentInsetAdjustmentBehavior='automatic'
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        style={{ backgroundColor: theme.background }}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.columnWrapper}
      />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 15,
    padding: 15,
  },
  columnWrapper: {
    gap: 15,
  },
});
