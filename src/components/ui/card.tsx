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
          { backgroundColor: theme.card, borderColor: theme.backgroundMuted },
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
    borderWidth: 2,
    borderColor: '#e2e2e2',
  },
});

export default Card;
