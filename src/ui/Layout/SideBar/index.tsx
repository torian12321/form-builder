import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { getFieldIds } from "../../../store/selectors/fields.selectors";
import { useAppSelector } from "../../../store/actions";
import { useFieldActions } from "../../../store/actions/fields";
import { QuestionsList, FooterButton } from "./SideBar.styles";
import { QuestionItem } from "./SideBar.QuestionItem";

const drawerWidth = 240;

export const SideBar = () => {
  const { addField } = useFieldActions();
  const fieldIds = useAppSelector(getFieldIds);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        open
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Toolbar />
        <Divider />
        <QuestionsList>
          {fieldIds.map((fieldId, index) => (
            <QuestionItem key={index} fieldId={fieldId} />
          ))}
        </QuestionsList>
        <Divider />
        <FooterButton onClick={addField}>Add Field</FooterButton>
      </Drawer>
    </Box>
  );
};
