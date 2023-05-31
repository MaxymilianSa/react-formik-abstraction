import { StepsProvider } from '@providers/StepsProvider';

import { Content } from '@/components/Content/Content';
import { Layout } from '@/components/Layout/Layout';

import './App.css';

const App = () => (
  <StepsProvider>
    <Layout>
      <Content />
    </Layout>
  </StepsProvider>
);

export default App;
