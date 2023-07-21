import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';
import { ThemeProvider } from 'styled-components';
<<<<<<< HEAD
import theme from './global/theme';

createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider
    authType={'localstorage'}
    authName={'_auth'}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
  >
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </AuthProvider>,
=======
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from './global/theme';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider
      authType={'localstorage'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={false}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>,
>>>>>>> 934d3edd31fc2c334874b940536226e584149920
);
