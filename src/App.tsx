import { useState } from "react";
import "./App.css";
import { ResponsiveDrawer } from "./ui/Layout";
import { FormDemo } from "./ui/FormDemo";
import { ToggleMode, MODES } from "./ui/ToggleMode";
import { CodeExample } from "./ui/CodeExample";
import { useAppSelector } from "./store/actions";
import { getFieldsList } from "./store/selectors/fields.selectors";

const App = () => {
  const fields = useAppSelector(getFieldsList);
  const [mode, setMode] = useState(MODES.VISUAL);

  return (
    <ResponsiveDrawer>
      <ToggleMode mode={mode} onChange={setMode} />
      {mode === MODES.VISUAL ? <FormDemo /> : <CodeExample obj={{ fields }} />}
    </ResponsiveDrawer>
  );
};

export default App;
