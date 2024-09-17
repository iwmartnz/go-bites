import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/ui';
import Product from '@/components/product';
import products from '../../../assets/data/products';

const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Product
        image={product.image}
        name={product.name}
        price={product.price}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
