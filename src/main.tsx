import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from 'react-auth-kit'

createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider authType = {'localstorage'}
                authName={'_auth'}
                cookieDomain={window.location.hostname}
                cookieSecure={false}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>

);
