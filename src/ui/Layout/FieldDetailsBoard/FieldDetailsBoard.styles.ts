import { styled } from '@mui/material/styles';
import List from "@mui/material/List";

export const Wrapper = styled('div')({
  height: '100%',
  width: 240,
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
  borderLeft: '1px solid #e0e0e0',
});

export const QuestionsList = styled(List)({
  flexGrow: 1,
  overflowY: 'auto',
});
