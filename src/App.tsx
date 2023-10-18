import { Button, FormRenderer } from "../lib/main";
import "./App.css";
import { ResponsiveDrawer } from "./Layout";
import { useFieldActions } from "./store/actions/fields";
import { getFieldsList } from "./store/selectors/fields.selectors";
import { useAppSelector } from "./store/actions";

const App = () => {
  const { resetFields } = useFieldActions();
  const fields = useAppSelector(getFieldsList);

  return (
    <ResponsiveDrawer>
      <section>
        <FormRenderer id="demo-form" fields={fields} />
        <Button onClick={resetFields}>Reset</Button>
      </section>
    </ResponsiveDrawer>
  );
};

export default App;
