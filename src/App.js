import './App.css';
import ButtonAppBar from './components/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline} from '@mui/material';
import { useState } from 'react';
import Spa from './Spa';

function App() {
  // Load the initial dark mode value from localStorage or use `false` as the default value
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true" || false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    // Update the `darkMode` state and store the new value in localStorage
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
          <ButtonAppBar check={darkMode} change={toggleDarkMode} />
          <Spa />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
