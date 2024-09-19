import { useTheme } from '@/hooks/useTheme';
import React, { forwardRef } from 'react';
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native';

type CardProps = React.ComponentPropsWithoutRef<typeof Pressable> & {
  style?: ViewStyle;
};

const Card = forwardRef<View | null, CardProps>(
  ({ children, style, ...pressableProps }, ref) => {
    const { theme } = useTheme();

    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={({ pressed }) => [
          styles.default,
          { backgroundColor: theme.card },
          style,
        ]}
      >
        {children}
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  default: {
    flex: 1,
    padding: 15,
    borderRadius: 20,
  },
});

export default Card;
