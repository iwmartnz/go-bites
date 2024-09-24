import React from 'react';
import { Text, Card, View } from './ui';
import { Image, StyleSheet } from 'react-native';
import type { OrderItem } from '@/types';

type Props = {
  order: OrderItem;
};

export default function OrderDetailsListItem({ order }: Props) {
  return (
    <Card style={styles.listItemContainer}>
      <View style={styles.listItemDetails} transparent>
        <Image
          source={{ uri: order.products.image || '' }}
          style={styles.image}
        />
        <View style={styles.gap} transparent>
          <Text type='subHeading'>{order.products.name}</Text>
          <View style={[styles.flexRow, styles.gap]} transparent>
            <Text>${order.products.price}</Text>
            <Text>Size: {order.size}</Text>
          </View>
        </View>
      </View>

      <Text>{order.quantity}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    width: 'auto',
    minHeight: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  listItemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: '30%',
    aspectRatio: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  gap: {
    gap: 10,
  },
});
