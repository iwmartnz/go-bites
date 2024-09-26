import { Image, Pressable, StyleSheet } from 'react-native';
import { Text, View } from './ui';

import type { Product } from '@/types';
import { Link, useSegments } from 'expo-router';
import Card from './ui/card';
import { useTheme } from '@/hooks/useTheme';

type ProductProps = {
  product: Product;
};
const ProductListItem = ({ product }: ProductProps) => {
  const theme = useTheme();
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Card style={styles.card}>
        <Image
          source={{ uri: product.image || '' }}
          style={styles.image}
          resizeMode='contain'
        />
        <Text type='subHeading'>{product.name}</Text>
        <Text type='price'>${product.price}</Text>
      </Card>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default ProductListItem;
