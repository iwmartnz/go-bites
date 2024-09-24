import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View, Card } from '@/components/ui';
import OrderListItem from '@/components/order-list-item';
import orders from '../../../../assets/data/orders';
import { Image, StyleSheet } from 'react-native';
import OrderDetailsListItem from '@/components/order-details-list-item';

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
          title: `Order Details`,
        }}
      />
      <View style={styles.container}>
        <Card style={styles.header}>
          <View transparent>
            <Text type='subHeading'>Order #:{order.id}</Text>
            <Text>{order.created_at}</Text>
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
