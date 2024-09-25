import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View, Card } from '@/components/ui';
import { StyleSheet } from 'react-native';
import OrderDetailsListItem from '@/components/order-details-list-item';

import orders from '../../../../assets/data/orders';
import Time from '@/components/time';

export default function OrderDetailsPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const order = orders.find((order) => order.id.toString() === id);

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
      <View style={styles.container}>
        <Card style={styles.header}>
          <View transparent>
            <Text type='subHeading'>Order #:{order.id}</Text>
            <Time date={order.created_at} variant='fromNow' />
          </View>
          <Text>{order.status}</Text>
        </Card>
        <View style={styles.list}>
          <Text type='label'>Products in the order:</Text>

          {order.order_items?.map((item) => (
            <OrderDetailsListItem order={item} key={item.id} />
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  header: {
    maxHeight: 100,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  list: {
    paddingTop: 10,
    gap: 10,
  },
});
