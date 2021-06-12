import {} from 'react-redux';

import { GlobalStyles, customTheme } from '@hardened/theme';
import { persistor, store } from './store';

import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet';
import { PersistGate } from 'redux-persist/integration/react';
import { PrimaryLayout } from './pages';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={undefined} persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={customTheme}>
            <Helmet defaultTitle="Hardened Cloud | Home" />
            <CssBaseline />
            <GlobalStyles />
            <PrimaryLayout />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
