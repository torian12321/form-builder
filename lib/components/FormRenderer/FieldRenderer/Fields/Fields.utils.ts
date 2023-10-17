import moment, { Moment } from 'moment';
import { DATE_FORMAT, DATETIME_FORMAT } from '../../../utils/dateUtils';
import type { Properties, Choice } from './Fields.types';

export const getFieldChoices = (properties?: Properties): Choice[] => {
  const { choices = [] } = properties || {};

  return choices;
};

export const formatMomentToDateTime = (dateMoment: Moment): string =>
  moment(dateMoment).format(DATETIME_FORMAT);

export const formatMomentToDate = (dateMoment: Moment): string =>
  moment(dateMoment).format(DATE_FORMAT);

export const getTodayDate = (): string => formatMomentToDate(moment());

export const getTodayDateTime = (): string => formatMomentToDate(moment());
