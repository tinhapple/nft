import moment from 'moment';
import { DATE_FORMAT } from '../constants/constants';

export const formatDate = (date, format = DATE_FORMAT) => {
  return moment(date).format(format);
};

export const formatNumber = (num) => {
  if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}`;
  }
  return num;
};
