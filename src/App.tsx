import "./App.css";
import ComponentShowcase from "./components/showcases/ComponentShowcase";
import { ThemeProvider } from "./hooks/useTheme";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ComponentShowcase />
      </div>
    </ThemeProvider>
  );
}

export default App;
