import { set, unset } from '../slices/selectedFieldSlice';
import { useAppDispatch } from '.';

interface UseSelectedFieldActions {
  setSelectedField: (fieldId: string) => void;
  unsetSelectedField: () => void;
}

export const useSelectedFieldActions = (): UseSelectedFieldActions => {
  const dispatch = useAppDispatch();

  const setSelectedField = (fieldId: string): void => {
    dispatch(set(fieldId));
  };
  const unsetSelectedField = (): void => {
    dispatch(unset());
  };

  return {
    setSelectedField,
    unsetSelectedField
  };
};
