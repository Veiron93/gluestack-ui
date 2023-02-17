//@ts-nocheck
import React, { memo, useEffect, useState } from 'react';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';
import { Motion } from '@legendapp/motion';

const StyledMotionView = memo(
  styled(
    Motion.View,
    {
      'w': 100,
      'h': 200,
      'bg': '$blue500',
      'props': {
        initial: { y: -150 },
        animate: {
          opacity: 0.5,
          y: 50,
          scale: 1,
        },
      },
      ':hover': {
        props: {
          animate: {
            opacity: 1,
          },
        },
      },
      '_text': {
        'props': {
          animate: {
            scale: 1,
          },
        },
        ':hover': {
          props: {
            animate: {
              scale: 1.01,
            },
          },
        },
      },
      'variants': {
        variant: {
          solid: {
            bg: '$green500',
          },
          subtle: {
            bg: '$green200',
          },
        },
      },
      'defaultProps': {
        variant: 'solid',
      },
    },
    {
      descendantStyle: ['_text'],
    }
  )
);

const StlyedText = styled(
  Motion.View,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function PropsPassing() {
  const [hover, setHover] = useState(false);

  const ref = React.useRef(null);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.addEventListener('mouseover', () => {
        setHover(true);
      });
      ref.current.addEventListener('mouseout', () => {
        setHover(false);
      });
    }
  }, []);

  return (
    <Wrapper>
      <StyledMotionView
        ref={ref}
        variant="subtle"
        /*        animate={{
          x: value * 100,
          opacity: value ? 1 : 0.2,
          scale: value ? 1 : 0.5,
        }}*/
        states={{ hover: hover }}
      >
        <StlyedText>Hello World</StlyedText>
      </StyledMotionView>
    </Wrapper>
  );
}

export default PropsPassing;
