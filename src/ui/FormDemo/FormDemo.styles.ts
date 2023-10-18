import { styled } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/material';

export const Wrapper = styled('section')({
  width: 460,
});

export const unselectedFieldStyles: SxProps<Theme> = {
  opacity: .4,
  transition: 'opacity .6s',
};
export const selectedFieldStyles: SxProps<Theme> = {
  opacity: 1,
};
