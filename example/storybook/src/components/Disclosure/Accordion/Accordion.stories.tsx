import type { ComponentMeta } from '@storybook/react-native';
import Accordion from './Accordion';
import AccordionCustomisedBackground from './AccordionCustomisedBackground';
import AccordionRoundedCorners from './AccordionRoundedCorner';
import AccordionCustomisedComponent from './AccordionCustomisedComponent';

const AccordionMeta: ComponentMeta<typeof Accordion> = {
  title: 'stories/DISCLOSURE/Accordion',
  component: Accordion,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Actionsheet component presents a set of options to the user, overlaid on top of the app's content, allowing them to take quick actions without leaving the current page or view.`,
  },
};

export default AccordionMeta;

export {
  Accordion,
  AccordionCustomisedBackground,
  AccordionRoundedCorners,
  AccordionCustomisedComponent,
};
