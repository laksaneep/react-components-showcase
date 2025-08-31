import ComponentShowcase from "./components/showcases/ComponentShowcase";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <ComponentShowcase />
    </ThemeProvider>
  );
}

export default App;
