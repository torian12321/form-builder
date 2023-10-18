export enum MODES {
  VISUAL = 'mode_visual',
  CODE = 'mode_code',
}

export interface Props {
  mode?: MODES;
  onChange?: (mode: MODES) => void;
}
