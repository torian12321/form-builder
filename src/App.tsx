import { Button } from "../lib/main";
import "./App.css";
import { ResponsiveDrawer } from "./Layout";

const App = () => {
  return (
    <>
      <ResponsiveDrawer>
        <h1>Vite + React</h1>
        <Button>ABC</Button>
      </ResponsiveDrawer>
    </>
  );
};

export default App;
