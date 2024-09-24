import { Stack } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';

import OrderListItem from '@/components/order-list-item';

import { useTheme } from '@/hooks/useTheme';
import orders from '../../../../assets/data/orders';

export default function OrdersPage() {
  const { theme } = useTheme();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Orders',
          headerLargeTitle: true,
          headerSearchBarOptions: { autoCapitalize: 'none' },
        }}
      />
      <FlatList
        contentInsetAdjustmentBehavior='automatic'
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        style={[{ backgroundColor: theme.background }, styles.container]}
        contentContainerStyle={styles.content}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  content: {
    gap: 15,
  },
});
