import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from './global/theme';
import { Toaster } from 'react-hot-toast';
import { UseSharedState } from './context/SharedContext';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <UseSharedState>
    <QueryClientProvider client={queryClient}>
      <AuthProvider
        authType={'localstorage'}
        authName={'_auth'}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <ThemeProvider theme={theme}>
          <Toaster
            position="top-center"
            reverseOrder={true}
            containerStyle={{
              zIndex: '1000',
              fontFamily: 'Rubik',
            }}
          />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  </UseSharedState>,
);
