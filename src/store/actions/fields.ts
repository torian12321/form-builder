import { add, reset } from '../slices/fieldsSlice';
import { useAppDispatch } from '.';

interface UseFieldActions {
  addField: () => void;
  resetFields: () => void;
}

export const useFieldActions = (): UseFieldActions => {
  const dispatch = useAppDispatch();

  const addField = (): void => {
    dispatch(add());
  };
  const resetFields = (): void => {
    dispatch(reset());
  };

  return {
    addField,
    resetFields
  };
};
