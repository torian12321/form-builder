import DataObjectIcon from "@mui/icons-material/DataObject";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { MODES } from "../../store/slices/settings.slice";
import { useSettingsActions } from "../../store/actions/settings";
import { useAppSelector } from "../../store/actions";
import { getDisplayMode } from "../../store/selectors/settings.selectors";

export const ToggleMode = () => {
  const displayMode = useAppSelector(getDisplayMode);
  const { setCodeMode, setVisualMode } = useSettingsActions();

  const control = {
    value: displayMode,
    exclusive: true,
  };

  return (
    <Stack spacing={2} alignItems="center">
      <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
        <ToggleButton
          value={MODES.VISUAL}
          key={MODES.VISUAL}
          onClick={setVisualMode}
        >
          <VisibilityIcon />
        </ToggleButton>
        <ToggleButton value={MODES.CODE} key={MODES.CODE} onClick={setCodeMode}>
          <DataObjectIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};
