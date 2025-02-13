import Main from "./pages/Main";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
// original
import FavoriteProvider from "./contexts/favoriteProvider";
import CartProvider from "./contexts/CartProvider";
import NotifyProvider from "./contexts/NotifyProvider";
import AuthProvider from "./contexts/AuthProvider";
import CheckoutProvider from "./contexts/CheckoutProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <FavoriteProvider>
          <CartProvider>
            <NotifyProvider>
              <CheckoutProvider>
                <div className="App">
                  <Main />
                </div>
              </CheckoutProvider>
            </NotifyProvider>
          </CartProvider>
        </FavoriteProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
