import { Link, useSegments } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Text, Card } from './ui';
import type { Order } from '@/types';
import Time from './time';

type OrderListItemProps = {
  order: Order;
};

export default function OrderListItem({ order }: OrderListItemProps) {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Card style={styles.container}>
        <View>
          <Text type='subHeading'>Order {order.id}</Text>
          <Time date={order.created_at} variant='fromNow' />
        </View>
        <Text type='label'>{order.status}</Text>
      </Card>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
