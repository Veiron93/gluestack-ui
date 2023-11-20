import { styled } from '@gluestack-style/react';
import { TBody } from '@expo/html-elements';

export default styled(
  TBody,
  {},
  {
    componentName: 'TableBody',
    ancestorStyle: ['_body'],
  } as const,
  {}
);