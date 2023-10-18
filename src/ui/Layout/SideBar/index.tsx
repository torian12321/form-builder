import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import { getFieldIds } from "../../../store/selectors/fields.selectors";
import { useAppSelector } from "../../../store/actions";
import { useFieldActions } from "../../../store/actions/fields";
import { Wrapper, QuestionsList, FooterButton } from "./SideBar.styles";
import { QuestionItem } from "./SideBar.QuestionItem";

export const SideBar = () => {
  const { addField } = useFieldActions();
  const fieldIds = useAppSelector(getFieldIds);

  return (
    <Wrapper>
      <Toolbar />
      <Divider />
      <QuestionsList>
        {fieldIds.map((fieldId, index) => (
          <QuestionItem key={index} fieldId={fieldId} />
        ))}
      </QuestionsList>
      <Divider />
      <FooterButton onClick={addField}>Add Field</FooterButton>
    </Wrapper>
  );
};
