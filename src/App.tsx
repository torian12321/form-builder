import { Button, FormRenderer, FIELD_TYPE } from "../lib/main";
import "./App.css";
import { ResponsiveDrawer } from "./Layout";

const App = () => {
  return (
    <>
      <ResponsiveDrawer>
        <FormRenderer
          id="demo-form"
          fields={[
            {
              type: FIELD_TYPE.TEXT,
              name: "text",
              label: "Field Type - text",
              properties: {},
            },
            {
              type: FIELD_TYPE.LONG_TEXT,
              name: "long_text",
              label: "Field Type - long text",
              properties: {},
            },
            {
              type: FIELD_TYPE.NUMBER,
              name: "number",
              label: "Field Type - number",
              properties: {},
            },
          ]}
        />
        <h1>Vite + React</h1>
        <Button>ABC</Button>
      </ResponsiveDrawer>
    </>
  );
};

export default App;
