import { Portfolio } from './pages/Portfolio';
import { ThemeProvider } from './contexts/ThemeContext';
import { ColorThemeConfig } from './theme/ThemeColors';

function App() {
  return (
    <ThemeProvider>
      <ColorThemeConfig />
      <Portfolio />
    </ThemeProvider>
  );
}

export { App };