import { styled } from '@mui/material/styles';
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";

export const Wrapper = styled('div')({
  height: '100%',
  width: 240,
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
  borderRight: '1px solid #e0e0e0',
});


export const QuestionsList = styled(List)({
  flexGrow: 1,
  overflowY: 'auto',
});

export const FooterButton = styled('button')({
  borderRadius: 0,
});

export const QuestionsItemText = styled(ListItemText)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': '2',
  '-webkit-box-orient': 'vertical',
});
