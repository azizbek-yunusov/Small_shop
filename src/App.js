import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import { ContextProvider } from "./context";

function App() {
  return (
    <>
      <ContextProvider>
        <Header /> 
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
