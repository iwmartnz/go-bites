import { Image, StyleSheet } from 'react-native';
import { Text, View } from './ui';

type ProductProps = {
  image: string;
  name: string;
  price: number;
};

export default function Product({ image, name, price }: ProductProps) {
  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />
      <Text type='subHeading'>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    color: 'blue',
  },
});
