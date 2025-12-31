import { Portfolio } from './pages/Portfolio';
import { ThemeProvider } from './contexts/ThemeContext';
import { ColorThemeConfig } from './theme/ThemeColors';
import { CustomCursor } from './components/ui/CustomCursor';

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <ColorThemeConfig />
      <Portfolio />
    </ThemeProvider>
  );
}

export { App };