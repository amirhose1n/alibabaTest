import { ThemeProvider } from "styled-components";
import { GlobalStyles , Container } from '../theme/globalStyles.js';
import { useTheme } from '../theme/useTheme.js';
import {Provider} from '../context';
import Router from '../router';
import Header from "../components/layout/header/index.js";
import defaultFakeCountries from './defaultFakeCountires.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {

  const { theme, themeLoaded , setMode , themeMode } = useTheme();

  return (
    <Provider value={{setMode, themeMode , countries:defaultFakeCountries}}> 
      <Container className="App">
      {
        themeLoaded && <ThemeProvider theme={ theme }>
          <GlobalStyles/>
          <Header />
          <Router/>
        </ThemeProvider>
      }
      </Container>
    </Provider>
  );
}

export default App;
