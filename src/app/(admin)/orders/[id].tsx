import { FlatList, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

import { Button, Text, View } from '@/components/ui';
import OrderDetailsListItem from '@/components/order-details-list-item';
import OrderListItem from '@/components/order-list-item';

import { useTheme } from '@/hooks/useTheme';

import orders from '../../../../assets/data/orders';
import { useState } from 'react';
import Chip from '@/components/ui/chip';
import { OrderStatus } from '@/types';

const ORDER_STATUS: OrderStatus[] = [
  'New',
  'Cooking',
  'Delivering',
  'Delivered',
];

export default function OrderDetailsPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();
  const order = orders.find((order) => order.id.toString() === id);

  const [orderStatus, setOrderStatus] = useState(order?.status);

  if (!order) {
    return <Text>Order not found</Text>;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: `Admin Order Details`,
          headerBackVisible: true,
        }}
      />

      <FlatList
        style={[{ backgroundColor: theme.background }, styles.container]}
        ListHeaderComponent={
          <View style={styles.header}>
            <OrderListItem order={order} />
            <Text type='label'>Products in the order</Text>
          </View>
        }
        data={order.order_items}
        renderItem={({ item }) => <OrderDetailsListItem order={item} />}
        contentContainerStyle={styles.list}
        ListFooterComponent={
          <>
            <Text type='label'>Update status</Text>
            <View style={styles.optionsContainer}>
              {ORDER_STATUS.map((status) => (
                <Chip
                  text={status}
                  key={status}
                  active={status === orderStatus}
                  onPress={() => {
                    setOrderStatus(status);
                  }}
                />
              ))}
            </View>
          </>
        }
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
  optionsContainer: {
    paddingTop: 15,
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
});
