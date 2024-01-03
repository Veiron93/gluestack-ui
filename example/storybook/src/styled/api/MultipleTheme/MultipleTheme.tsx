import React from 'react';

import { View } from 'react-native';
import { Theme, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';

const Box = styled(
  View,
  {
    bg: '$blue500',
    // 'bg': '$bgcolorlight',
    p: '$10',
    // ':hover': {
    //   'bg': '$blue400',
    //   '.dark': {
    //     'bg': '$red500',
    //     '.notmodern': {
    //       bg: '$purple400',
    //     },
    //   },
    // },
    // '@base': {
    //   // '_light': {
    //   '.dark': {
    //     bg: '$red500',
    //     p: '$12',
    //   },
    // },
    // '@sm': {
    //   // '_light': {
    //   '.dark': {
    //     bg: '$pink500',
    //     p: '$20',
    //   },
    // },
    // },
    // },

    // '_dark': {
    //   bg: '$red500',
    // },
  },
  {
    componentName: 'MyBox',
  }
);
export function MultipleTheme() {
  // console.log('>>>>>  component');
  return (
    <Wrapper>
      <Theme name="dark">
        <Theme name="notmodern1">
          {/* <Theme name="notmodern">
        <Theme name="modern"> */}
          <Box
            states={{ hover: true }}
            sx={
              {
                // '.dark': {
                //   bg: '$green500',
                //   // '.notmodern': {
                //   //   bg: '$yellow400',
                //   // },
                // },
                // bg: '$bgcolorlight',
              }
            }
          ></Box>
        </Theme>
      </Theme>
      {/* <Box
        states={{ hover: true }}
        sx={
          {
            // bg: '$bgcolorlight',
          }
        }
      ></Box> */}
      {/* </Theme>
      </Theme> */}
      {/* </Theme> */}
    </Wrapper>
  );
}

export default MultipleTheme;