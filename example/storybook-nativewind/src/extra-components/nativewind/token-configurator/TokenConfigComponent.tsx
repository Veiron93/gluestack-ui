import React from 'react';
import CodeEditorComponent from './ui/CodeEditorComponent';
import PreviewComponent from './ui/PreviewComponent';

import ThemeProvider from './util/ThemeProvider';
import { GluestackUIProvider } from './ui/gluestack-ui-provider/index.web';

export default function TokenConfiguratorBaseComponent() {
  return (
    <ThemeProvider>
      <GluestackUIProvider>
        <Layout />
      </GluestackUIProvider>
    </ThemeProvider>
  );
}

export function Layout() {
  return (
    <>
      <div className="flex justify-center align-middle flex-col overflow-x-auto">
        <div>
          <PreviewComponent />
        </div>
        <div className="m-8">
          <CodeEditorComponent />
        </div>
      </div>
    </>
  );
}
