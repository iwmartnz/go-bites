import { Stack } from 'expo-router';
import { FlatList, StyleSheet } from 'react-native';

import OrderListItem from '@/components/order-list-item';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import { useTheme } from '@/hooks/useTheme';
import orders from '../../../../assets/data/orders';
import { useEffect, useState } from 'react';
import { Order } from '@/types';
import { Text } from '@/components/ui';

export default function OrdersPage() {
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);
  const [ordersList, setOrdersList] = useState<Order[]>(orders);

  useEffect(() => {
    if (index === 0) {
      setOrdersList(orders);
    } else if (index === 1) {
      const deliveredOrders = orders.filter(
        (item) => item.status === 'Cooking'
      );
      setOrdersList(deliveredOrders);
    } else if (index === 2) {
      const deliveredOrders = orders.filter(
        (item) => item.status === 'Delivered'
      );
      setOrdersList(deliveredOrders);
    }
  }, [index]);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Orders',
          headerLargeTitle: true,
          headerLargeTitleStyle: { fontFamily: 'Satoshi-Black' },
          headerSearchBarOptions: {
            autoCapitalize: 'none',
            barTintColor: '#fff',
          },
          headerTitle: (props) => (
            <SegmentedControl
              values={['All', 'Archive']}
              style={{ height: 30, width: '70%' }}
              selectedIndex={index}
              onChange={(event) => {
                setIndex(event.nativeEvent.selectedSegmentIndex);
              }}
            />
          ),
        }}
      />
      <FlatList
        contentInsetAdjustmentBehavior='automatic'
        data={ordersList}
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
