import routes from '@routes';
import React from 'react';
import { useRoutes } from 'react-router-dom';

const App: React.FC = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};

export default App;
