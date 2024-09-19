import { Image, Pressable, StyleSheet } from 'react-native';
import { Text, View } from './ui';

import type { Product } from '@/types';
import { Link } from 'expo-router';
import Card from './ui/card';

type ProductProps = {
  product: Product;
};
export default function Product({ product }: ProductProps) {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Card style={styles.card}>
        <Image
          source={{ uri: product.image || '' }}
          style={styles.image}
          resizeMode='contain'
        />
        <Text type='subHeading'>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Card>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    color: 'blue',
  },
});
