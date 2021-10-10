import "../styles/globals.css";
import { UserContextProvider } from "../store/LoginProvider";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
      
  );
}

export default MyApp;
