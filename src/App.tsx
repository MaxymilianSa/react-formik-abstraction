import Content from '@/components/content';
import Layout from '@/components/layout';
import { StepsProvider } from '@/providers/steps.provider';

import './global.css';

const App = () => (
  <StepsProvider>
    <Layout>
      <Content />
    </Layout>
  </StepsProvider>
);

export default App;
