import { useState } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack, useRouter, Link } from 'expo-router';

import products from '../../../../assets/data/products';

import { Button, Text, View } from '@/components/ui';
import { useCart } from '@/context/cart-context';
import { PizzaSize } from '@/types';
import { Edit, PlusSquare } from '@/components/icons';
import { useTheme } from '@/hooks/useTheme';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { theme } = useTheme();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('S');
  const { addItem } = useCart();
  const product = products.find((product) => product.id.toString() === id);

  const addToCart = () => {
    if (!product) {
      return;
    }
    addItem(product, selectedSize);
    router.push('/cart');
  };

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: product.name,
          headerBackTitleStyle: { fontFamily: 'Satoshi-Medium' },
          headerTitleStyle: { fontFamily: 'Satoshi-Black' },
          headerRight: () => (
            <Link href='/cart' asChild>
              <Pressable>
                {({ pressed }) => (
                  <Edit color={theme.adminTint} variant='filled' />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <View style={styles.container}>
        <Image
          source={{ uri: product.image || '' }}
          style={styles.image}
          resizeMode='contain'
        />
        <View style={styles.details}>
          <Text>Product name:</Text>
          <Text type='subHeading'>{product.name}</Text>
          <Text>Product name:</Text>
          <Text type='subHeading'>${product.price}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  image: { width: '100%', aspectRatio: 1 },
  details: { gap: 4 },
});
