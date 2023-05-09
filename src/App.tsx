import { Step } from '@components/Step/Step';
import { StepsProvider } from '@providers/StepsProvider';

import { Layout } from '@/components/Layout/Layout';

import './App.css';

const App = () => (
  <StepsProvider>
    <Layout>
      <Step />
    </Layout>
  </StepsProvider>
);

export default App;
