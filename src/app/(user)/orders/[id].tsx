import { FlatList, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import { Text, View } from '@/components/ui';
import OrderListItem from '@/components/order-list-item';
import OrderDetailsListItem from '@/components/order-details-list-item';

import { useTheme } from '@/hooks/useTheme';

import orders from '../../../../assets/data/orders';

export default function OrderDetailsPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();

  const order = orders.find((order) => order.id.toString() === id);

  if (!order) {
    return <Text>Order not found</Text>;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: `Order Details`,
        }}
      />
      <FlatList
        style={[{ backgroundColor: theme.background }, styles.container]}
        ListHeaderComponent={
          <View style={styles.header}>
            <OrderListItem order={order} />
            <Text type='label'>Products in the order:</Text>
          </View>
        }
        data={order.order_items}
        renderItem={({ item }) => <OrderDetailsListItem order={item} />}
        contentContainerStyle={styles.list}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  header: { gap: 15 },
  list: {
    gap: 15,
  },
});
