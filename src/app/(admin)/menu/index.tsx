import { FlatList, Pressable, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

import ProductListItem from '@/components/product-list-item';
import products from '../../../../assets/data/products';
import { useTheme } from '@/hooks/useTheme';
import { PlusSquare } from '@/components/icons';

export default function MenuScreen() {
  const { theme } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Menu',
          headerLargeTitle: true,
          headerSearchBarOptions: { autoCapitalize: 'none' },
          headerRight: () => (
            <Link href='/(admin)/menu/create' asChild>
              <Pressable>
                {({ pressed }) => <PlusSquare color={theme.tint} />}
              </Pressable>
            </Link>
          ),
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
