import { FlatList, Platform, StyleSheet } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from '@/components/ui';
import { useCart } from '@/context/cart-context';
import CartListItem from '@/components/cart-Item';
import { useTheme } from '@/hooks/useTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CartScreen = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const { items, total } = useCart();

  return (
    <View style={[{ paddingBottom: insets.bottom }, styles.container]}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <FlatList
        data={items}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        style={{ backgroundColor: theme.background }}
        contentContainerStyle={styles.content}
      />
      <Text type='subHeading'>Total:{total}</Text>
      <Button text='Checkout' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15 },
  content: {
    gap: 15,
  },
});

export default CartScreen;
