import InboxIcon from "@mui/icons-material/MoveToInbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useGetFieldById } from "../../store/selectors/fields.selectors";

interface Props {
  fieldId: string;
}

export const QuestionItem = ({ fieldId }: Props) => {
  const { label } = useGetFieldById(fieldId);

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
