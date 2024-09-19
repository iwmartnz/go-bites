import { useState } from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';

import products from '../../../../assets/data/products';

import { Button, Text, View } from '@/components/ui';
import { useCart } from '@/context/cart-context';
import { PizzaSize } from '@/types';

const SIZES: PizzaSize[] = ['S', 'M', 'L', 'XL'];

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const product = products.find((product) => product.id.toString() === id);
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('S');
  const { addItem } = useCart();

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
      <Stack.Screen options={{ title: product.name }} />
      <View style={styles.container}>
        <Image
          source={{ uri: product.image || '' }}
          style={styles.image}
          resizeMode='contain'
        />
        <Text>Select size</Text>

        <View style={styles.sizes}>
          {SIZES.map((size) => (
            <Pressable
              onPress={() => {
                setSelectedSize(size);
              }}
              style={[
                styles.size,
                {
                  backgroundColor:
                    selectedSize === size ? 'gainsboro' : 'transparent',
                },
              ]}
              key={size}
            >
              <Text
                style={[
                  styles.sizeText,
                  {
                    color: selectedSize === size ? 'black' : 'gray',
                  },
                ]}
              >
                {size}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.price}>${product.price}</Text>
        <Button text='Add to cart' onPress={addToCart} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  image: { width: '100%', aspectRatio: 1 },
  price: { fontSize: 18, fontWeight: 'bold', marginTop: 'auto' },
  sizes: { flexDirection: 'row', justifyContent: 'space-around' },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: { fontSize: 20, fontWeight: '500' },
});
