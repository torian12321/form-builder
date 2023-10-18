import InboxIcon from "@mui/icons-material/MoveToInbox";
import AbcIcon from "@mui/icons-material/Abc";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import NumbersIcon from "@mui/icons-material/Numbers";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useAppSelector } from "../../../store/actions";
import { useGetFieldById } from "../../../store/selectors/fields.selectors";
import { FIELD_TYPE } from "../../../../lib/main";
import { useSelectedFieldActions } from "../../../store/actions/selectedField";
import { getSelectedField } from "../../../store/selectors/selectedField.selectors";

interface Props {
  fieldId: string;
}

const ICONS: { [fieldType: string]: JSX.Element } = {
  [FIELD_TYPE.TEXT]: <AbcIcon />,
  [FIELD_TYPE.LONG_TEXT]: <TextIncreaseIcon />,
  [FIELD_TYPE.NUMBER]: <NumbersIcon />,
};

export const QuestionItem = ({ fieldId }: Props) => {
  const selectedField = useAppSelector(getSelectedField);
  const { setSelectedField, unsetSelectedField } = useSelectedFieldActions();
  const { label, type } = useGetFieldById(fieldId);

  const handleOnClick = () => {
    if (selectedField === fieldId) {
      unsetSelectedField();
    } else {
      setSelectedField(fieldId);
    }
  };

  return (
    <ListItem disablePadding onClick={handleOnClick}>
      <ListItemButton>
        <ListItemIcon>{ICONS[type] || <InboxIcon />}</ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
