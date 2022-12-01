import "./App.css";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import { ColorProvider } from "./context/color";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
