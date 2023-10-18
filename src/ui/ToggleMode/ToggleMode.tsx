import DataObjectIcon from "@mui/icons-material/DataObject";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Props, MODES } from "./ToggleMode.types";

export const ToggleMode = ({
  mode = MODES.VISUAL,
  onChange = () => {},
}: Props) => {
  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newMode: MODES
  ) => {
    onChange(newMode);
  };

  const control = {
    value: mode,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack spacing={2} alignItems="center">
      <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
        <ToggleButton value={MODES.VISUAL} key={MODES.VISUAL}>
          <VisibilityIcon />
        </ToggleButton>
        <ToggleButton value={MODES.CODE} key={MODES.CODE}>
          <DataObjectIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};
