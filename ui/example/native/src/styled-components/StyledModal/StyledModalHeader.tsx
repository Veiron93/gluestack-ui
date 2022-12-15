import { View } from 'react-native';
import { styled } from '@gluestack/styled';

export default styled(
  View,
  {
    baseStyle: {
      style: {
        p: '$4',
        borderBottomWidth: 1,
        //@ts-ignore

        bg: '$muted.50',
        borderColor: '$muted.300',
      },
    },
  },
  {}
);
