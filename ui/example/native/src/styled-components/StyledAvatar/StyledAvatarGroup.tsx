import { View } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$blue.500',
        flexDirection: 'row',
        // @ts-ignore
        gap: '36px',
      },
    },
  },
  {}
);
